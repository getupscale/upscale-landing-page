import { afterEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render, screen } from "@testing-library/react";
import React from "react";

import { RotatingHeroHeadline } from "@/components/rotating-hero-headline";
import { HeroSection } from "@/components/hero-section";
import { FlexibilitySection } from "@/components/flexibility-section";
import { SiteFooter } from "@/components/site-footer";
import { WAITLIST_CTA_TESTIDS } from "@/lib/waitlist-config";

function getLiveRegion() {
  return screen.getByText((_, node) => node?.getAttribute("aria-live") === "polite");
}

async function advanceUntilLiveRegionContains(text: string, maxSteps = 2000) {
  for (let i = 0; i < maxSteps; i += 1) {
    if (getLiveRegion().textContent?.includes(text)) return;
    await act(async () => {
      await vi.advanceTimersToNextTimerAsync();
    });
  }

  throw new Error(`Timed out waiting for live region to contain: ${text}`);
}

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("RotatingHeroHeadline", () => {
  it(
    "renders the static headline and eventually types the configured role phrases",
    async () => {
    vi.useFakeTimers();
    render(React.createElement(RotatingHeroHeadline));

    expect(screen.getByText("Your Business Does not Need More Software.")).toBeInTheDocument();
    expect(screen.getByText("It Needs an")).toBeInTheDocument();

    await advanceUntilLiveRegionContains("Operational Brain");
    expect(getLiveRegion()).toHaveTextContent("Operational Brain");

    // Move forward enough time for the component to delete + type the next terms.
    await advanceUntilLiveRegionContains("Execution Engine");
    expect(getLiveRegion()).toHaveTextContent("Execution Engine");

    await advanceUntilLiveRegionContains("AI Operator");
    expect(getLiveRegion()).toHaveTextContent("AI Operator");

    // Ensure we are not rendering any of the legacy/banned phrases.
    expect(screen.queryByText(/on the Go/i)).toBeNull();
    expect(screen.queryByText(/in Flow/i)).toBeNull();
    expect(screen.queryByText(/to Grow/i)).toBeNull();
    }
  );
});

{/*
// section for revision:

describe("Marketing sections", () => {
  it("HeroSection renders waitlist CTAs", () => {
    render(React.createElement(HeroSection));
    expect(screen.getByTestId(WAITLIST_CTA_TESTIDS.heroPrimary)).toBeInTheDocument();
    expect(screen.getByTestId(WAITLIST_CTA_TESTIDS.heroSecondary)).toBeInTheDocument();
  });

  it("FlexibilitySection renders key copy and example outputs", () => {
    render(React.createElement(FlexibilitySection));
    expect(screen.getByText("Flexibility")).toBeInTheDocument();
    expect(screen.getByText(/Get outputs in the format/i)).toBeInTheDocument();
    expect(screen.getByText("Direct Slack/Teams Integration")).toBeInTheDocument();
    expect(screen.getByText("Auto-populates Spreadsheets")).toBeInTheDocument();
    expect(screen.getByText("Board-ready PDF Generation")).toBeInTheDocument();
  });

  it("SiteFooter renders brand and legal links", () => {
    render(React.createElement(SiteFooter));
    expect(screen.getByText("Upscale")).toBeInTheDocument();
    expect(screen.getByText("Privacy")).toBeInTheDocument();
    expect(screen.getByText("Terms")).toBeInTheDocument();
    expect(screen.getByText("Security")).toBeInTheDocument();
  });
});
*/}
