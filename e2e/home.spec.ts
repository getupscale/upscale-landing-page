import { expect, test } from "@playwright/test";
import { WAITLIST_CTA_TESTIDS, WAITLIST_MODAL_TESTIDS } from "../lib/waitlist-config";

const ctaTestIds = [
  WAITLIST_CTA_TESTIDS.navbar,
  WAITLIST_CTA_TESTIDS.heroPrimary,
  WAITLIST_CTA_TESTIDS.heroSecondary,
  WAITLIST_CTA_TESTIDS.ctaPrimary,
  WAITLIST_CTA_TESTIDS.ctaSecondary
] as const;

test.describe("homepage interactions", () => {
  for (const ctaTestId of ctaTestIds) {
    test(`opens waitlist modal from CTA: ${ctaTestId}`, async ({ page }) => {
      await page.goto("/");

      const cta = page.getByTestId(ctaTestId);
      await cta.scrollIntoViewIfNeeded();
      await cta.click();

      await expect(page.getByTestId(WAITLIST_MODAL_TESTIDS.dialog)).toBeVisible();

      await page.getByTestId(WAITLIST_MODAL_TESTIDS.close).click();
      await expect(page.getByTestId(WAITLIST_MODAL_TESTIDS.dialog)).toHaveCount(0);
    });
  }

  test("submits waitlist modal successfully with mocked API", async ({ page }) => {
    let requestBody: Record<string, unknown> | null = null;

    await page.route("**/api/waitlist", async (route) => {
      requestBody = (route.request().postDataJSON() ?? null) as Record<string, unknown> | null;
      await route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify({ ok: true })
      });
    });

    await page.goto("/");
    await page.getByTestId(WAITLIST_CTA_TESTIDS.navbar).click();

    const nextButton = page.getByTestId(WAITLIST_MODAL_TESTIDS.next);

    await page.getByPlaceholder("name@company.com").fill("jane@example.com");
    await expect(nextButton).toBeEnabled();
    await nextButton.click();

    await page.getByPlaceholder("TechFlow").fill("Acme");
    await page.getByRole("button", { name: "Finance" }).click();
    await expect(nextButton).toBeEnabled();
    await nextButton.click();

    await page.getByRole("button", { name: "11-50" }).click();
    await expect(nextButton).toBeEnabled();
    await nextButton.click();

    await page.getByPlaceholder("Tell us what you want Upscale to automate first...").fill("Automate payment retries.");

    const submitButton = page.getByTestId(WAITLIST_MODAL_TESTIDS.submit);
    await expect(submitButton).toBeEnabled();
    await submitButton.click();

    await expect(page.getByText(/on the list\./i)).toBeVisible();
    await expect.poll(() => requestBody).not.toBeNull();
    await expect
      .poll(() => requestBody && typeof requestBody.email === "string")
      .toBeTruthy();
  });

  test("switches feature tabs and updates active panel", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByTestId("features-tabs-row")).toBeVisible();
    await expect(page.getByTestId("features-panel-diagnose")).toBeVisible();

    await page.getByTestId("features-tab-recommend").click();

    await expect(page.getByTestId("features-panel-recommend")).toBeVisible();
    await expect(page.getByTestId("features-panel-diagnose")).toHaveCount(0);
  });

  test("mobile viewport has no horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto("/");

    const hasNoOverflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
    expect(hasNoOverflow).toBe(true);
  });
});
