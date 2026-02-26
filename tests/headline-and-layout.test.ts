import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const rotatingHeadlinePath = "/home/damilare/Downloads/upscale_website/components/rotating-hero-headline.tsx";
const heroSectionPath = "/home/damilare/Downloads/upscale_website/components/hero-section.tsx";
const flexibilitySectionPath = "/home/damilare/Downloads/upscale_website/components/flexibility-section.tsx";
const footerPath = "/home/damilare/Downloads/upscale_website/components/site-footer.tsx";

test("rotating headline loops only the requested three role phrases", () => {
  const source = readFileSync(rotatingHeadlinePath, "utf8");

  assert.equal(source.includes("typedChars"), true);
  assert.equal(source.includes("phase"), true);
  assert.equal(source.includes("setTimeout"), true);
  assert.equal(source.includes("setInterval"), false);
  assert.equal(source.includes("activeTerm"), true);
  assert.equal(source.includes("Your Business Does not Need More Software."), true);
  assert.equal(source.includes("It Needs an"), true);
  assert.equal(source.includes("Operational Brain"), true);
  assert.equal(source.includes("Execution Engine"), true);
  assert.equal(source.includes("AI Operator"), true);
  assert.equal(source.includes("on the Go"), false);
  assert.equal(source.includes("in Flow"), false);
  assert.equal(source.includes("to Grow"), false);
});

test("feature visual sections use shadcn Card primitives", () => {
  const heroSource = readFileSync(heroSectionPath, "utf8");
  const flexibilitySource = readFileSync(flexibilitySectionPath, "utf8");

  assert.equal(heroSource.includes("@/components/ui/card"), true);
  assert.equal(flexibilitySource.includes("@/components/ui/card"), true);
  assert.equal(heroSource.includes("<Card"), true);
  assert.equal(flexibilitySource.includes("<Card"), true);
});

test("footer uses mobile-first fit classes", () => {
  const source = readFileSync(footerPath, "utf8");

  assert.equal(source.includes("grid-cols-1"), true);
  assert.equal(source.includes("sm:grid-cols-2"), true);
});
