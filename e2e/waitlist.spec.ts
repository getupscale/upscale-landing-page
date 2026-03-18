import { expect, test } from "@playwright/test";
import { WAITLIST_CTA_TESTIDS, WAITLIST_MODAL_TESTIDS } from "../lib/waitlist-config";

async function openModal(page: Parameters<Parameters<typeof test>[1]>[0]) {
  await page.goto("/");
  await page.getByTestId(WAITLIST_CTA_TESTIDS.navbar).click();
  await expect(page.getByTestId(WAITLIST_MODAL_TESTIDS.dialog)).toBeVisible();
}

test.describe("waitlist modal — validation", () => {
  test("step 0: Next disabled until valid email is entered", async ({ page }) => {
    await openModal(page);

    const next = page.getByTestId(WAITLIST_MODAL_TESTIDS.next);
    await expect(next).toBeDisabled();

    await page.getByPlaceholder("name@company.com").fill("notanemail");
    await expect(next).toBeDisabled();

    await page.getByPlaceholder("name@company.com").fill("jane@example.com");
    await expect(next).toBeEnabled();
  });

  test("step 1: Next disabled until both company and role are provided", async ({ page }) => {
    await openModal(page);

    await page.getByPlaceholder("name@company.com").fill("jane@example.com");
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    const next = page.getByTestId(WAITLIST_MODAL_TESTIDS.next);
    await expect(next).toBeDisabled();

    await page.getByPlaceholder("TechFlow").fill("Acme");
    await expect(next).toBeDisabled();

    await page.getByRole("button", { name: "Finance" }).click();
    await expect(next).toBeEnabled();
  });

  test("step 1: Next disabled if company filled but no role selected", async ({ page }) => {
    await openModal(page);

    await page.getByPlaceholder("name@company.com").fill("jane@example.com");
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByPlaceholder("TechFlow").fill("Acme");
    await expect(page.getByTestId(WAITLIST_MODAL_TESTIDS.next)).toBeDisabled();
  });

  test("step 2: Next disabled until company size is selected", async ({ page }) => {
    await openModal(page);

    await page.getByPlaceholder("name@company.com").fill("jane@example.com");
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByPlaceholder("TechFlow").fill("Acme");
    await page.getByRole("button", { name: "Finance" }).click();
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    const next = page.getByTestId(WAITLIST_MODAL_TESTIDS.next);
    await expect(next).toBeDisabled();

    await page.getByRole("button", { name: "11-50" }).click();
    await expect(next).toBeEnabled();
  });

  test("step 3: Next (submit) always enabled", async ({ page }) => {
    await openModal(page);

    await page.route("**/api/waitlist", (route) =>
      route.fulfill({ status: 201, contentType: "application/json", body: JSON.stringify({ ok: true }) })
    );

    await page.getByPlaceholder("name@company.com").fill("jane@example.com");
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByPlaceholder("TechFlow").fill("Acme");
    await page.getByRole("button", { name: "Finance" }).click();
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByRole("button", { name: "11-50" }).click();
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await expect(page.getByTestId(WAITLIST_MODAL_TESTIDS.submit)).toBeEnabled();
  });
});

test.describe("waitlist modal — back navigation", () => {
  test("Back is disabled on step 0", async ({ page }) => {
    await openModal(page);
    await expect(page.getByTestId(WAITLIST_MODAL_TESTIDS.back)).toBeDisabled();
  });

  test("Back returns to previous step and preserves values", async ({ page }) => {
    await openModal(page);

    await page.getByPlaceholder("name@company.com").fill("jane@example.com");
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await expect(page.getByPlaceholder("TechFlow")).toBeVisible();
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.back).click();

    await expect(page.getByPlaceholder("name@company.com")).toHaveValue("jane@example.com");
  });

  test("progress bar increases on advance and decreases on back", async ({ page }) => {
    await openModal(page);

    const progress = page.getByTestId(WAITLIST_MODAL_TESTIDS.progress);

    const widthAt = async () => {
      const bar = progress.locator("> div");
      const style = await bar.getAttribute("style");
      const match = style?.match(/width:\s*([\d.]+)%/);
      return match ? parseFloat(match[1]) : null;
    };

    const step0Width = await widthAt();

    await page.getByPlaceholder("name@company.com").fill("jane@example.com");
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();
    const step1Width = await widthAt();

    expect(step1Width).toBeGreaterThan(step0Width!);

    await page.getByTestId(WAITLIST_MODAL_TESTIDS.back).click();
    const backWidth = await widthAt();

    expect(backWidth).toBe(step0Width);
  });
});

test.describe("waitlist modal — API error state", () => {
  test("shows error banner when API returns 500", async ({ page }) => {
    await openModal(page);

    await page.route("**/api/waitlist", (route) =>
      route.fulfill({ status: 500, contentType: "application/json", body: JSON.stringify({ error: "Database error" }) })
    );

    await page.getByPlaceholder("name@company.com").fill("jane@example.com");
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByPlaceholder("TechFlow").fill("Acme");
    await page.getByRole("button", { name: "Finance" }).click();
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByRole("button", { name: "11-50" }).click();
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByTestId(WAITLIST_MODAL_TESTIDS.submit).click();

    await expect(page.getByText("Database error")).toBeVisible();
    await expect(page.getByText(/on the list\./i)).toHaveCount(0);
  });

  test("error clears on retry", async ({ page }) => {
    await openModal(page);

    let callCount = 0;
    await page.route("**/api/waitlist", (route) => {
      callCount++;
      if (callCount === 1) {
        return route.fulfill({ status: 500, contentType: "application/json", body: JSON.stringify({ error: "Database error" }) });
      }
      return route.fulfill({ status: 201, contentType: "application/json", body: JSON.stringify({ ok: true }) });
    });

    const fillAndSubmit = async () => {
      await page.getByPlaceholder("name@company.com").fill("jane@example.com");
      await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();
      await page.getByPlaceholder("TechFlow").fill("Acme");
      await page.getByRole("button", { name: "Finance" }).click();
      await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();
      await page.getByRole("button", { name: "11-50" }).click();
      await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();
      await page.getByTestId(WAITLIST_MODAL_TESTIDS.submit).click();
    };

    await fillAndSubmit();
    await expect(page.getByText("Database error")).toBeVisible();

    await page.getByTestId(WAITLIST_MODAL_TESTIDS.submit).click();
    await expect(page.getByText("Database error")).toHaveCount(0);
    await expect(page.getByText(/on the list\./i)).toBeVisible();
  });
});

test.describe("waitlist modal — success state", () => {
  test("shows success panel and hides form after submit", async ({ page }) => {
    await openModal(page);

    await page.route("**/api/waitlist", (route) =>
      route.fulfill({ status: 201, contentType: "application/json", body: JSON.stringify({ ok: true }) })
    );

    await page.getByPlaceholder("name@company.com").fill("jane@example.com");
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByPlaceholder("TechFlow").fill("Acme");
    await page.getByRole("button", { name: "RevOps" }).click();
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByRole("button", { name: "51-200" }).click();
    await page.getByRole("button", { name: "Reduce DSO" }).click();
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByPlaceholder("Tell us what you want Upscale to automate first...").fill("Automate payment retries.");
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.submit).click();

    await expect(page.getByText(/on the list\./i)).toBeVisible();
    await expect(page.getByTestId(WAITLIST_MODAL_TESTIDS.next)).toHaveCount(0);
    await expect(page.getByTestId(WAITLIST_MODAL_TESTIDS.back)).toHaveCount(0);
  });

  test("Done button closes modal after success", async ({ page }) => {
    await openModal(page);

    await page.route("**/api/waitlist", (route) =>
      route.fulfill({ status: 201, contentType: "application/json", body: JSON.stringify({ ok: true }) })
    );

    await page.getByPlaceholder("name@company.com").fill("jane@example.com");
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByPlaceholder("TechFlow").fill("Acme");
    await page.getByRole("button", { name: "Finance" }).click();
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByRole("button", { name: "11-50" }).click();
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.next).click();

    await page.getByTestId(WAITLIST_MODAL_TESTIDS.submit).click();

    await expect(page.getByText(/on the list\./i)).toBeVisible();
    await page.getByRole("button", { name: "Done" }).click();

    await expect(page.getByTestId(WAITLIST_MODAL_TESTIDS.dialog)).toHaveCount(0);
  });
});

test.describe("waitlist modal — dismiss", () => {
  test("Escape key closes modal", async ({ page }) => {
    await openModal(page);
    await page.keyboard.press("Escape");
    await expect(page.getByTestId(WAITLIST_MODAL_TESTIDS.dialog)).toHaveCount(0);
  });

  test("clicking overlay closes modal", async ({ page }) => {
    await openModal(page);
    await page.getByTestId(WAITLIST_MODAL_TESTIDS.overlay).click({ position: { x: 5, y: 5 } });
    await expect(page.getByTestId(WAITLIST_MODAL_TESTIDS.dialog)).toHaveCount(0);
  });
});
