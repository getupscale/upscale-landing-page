"use client";

import { useEffect, useState } from "react";

const operationalBrainTerms = ["Operational Brain", "Execution Engine", "AI Operator"];

type Phase = "typing" | "holding" | "deleting";

const TYPE_SPEED_MS = 48;
const HOLD_SPEED_MS = 900;
const DELETE_SPEED_MS = 30;

export function RotatingHeroHeadline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const activeTerm = operationalBrainTerms[activeIndex];
    let timerId: number;

    if (phase === "typing") {
      timerId = window.setTimeout(() => {
        if (typedChars >= activeTerm.length) {
          setPhase("holding");
          return;
        }

        setTypedChars((prev) => prev + 1);
      }, TYPE_SPEED_MS);
    } else if (phase === "holding") {
      timerId = window.setTimeout(() => {
        setPhase("deleting");
      }, HOLD_SPEED_MS);
    } else {
      timerId = window.setTimeout(() => {
        if (typedChars <= 0) {
          setActiveIndex((prev) => (prev + 1) % operationalBrainTerms.length);
          setPhase("typing");
          return;
        }

        setTypedChars((prev) => prev - 1);
      }, DELETE_SPEED_MS);
    }

    return () => {
      window.clearTimeout(timerId);
    };
  }, [activeIndex, phase, typedChars]);

  const activeTerm = operationalBrainTerms[activeIndex];
  const visibleTerm = activeTerm.slice(0, typedChars);
  const showCursor = phase !== "holding";

  return (
    <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
      <span className="block">Your Business Does not Need More Software.</span>
      <span className="mt-3 block md:mt-4">It Needs an</span>
      <span className="serif-italic mt-2 block text-5xl font-normal text-accent transition-all duration-300 sm:text-6xl md:text-8xl" aria-live="polite">
        {visibleTerm}
        {showCursor ? <span className="ml-1 inline-block animate-pulse font-sans not-italic">|</span> : null}
      </span>
    </h1>
  );
}
