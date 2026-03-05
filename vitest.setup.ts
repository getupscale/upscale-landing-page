import React from "react";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("framer-motion", () => {
  return {
    motion: {
      section: ({ children, ...props }: Record<string, unknown> & { children?: React.ReactNode }) => {
        const {
          // motion-only props we don't want on DOM
          initial: _initial,
          whileInView: _whileInView,
          animate: _animate,
          exit: _exit,
          transition: _transition,
          viewport: _viewport,
          variants: _variants,
          ...domProps
        } = props;

        return React.createElement("section", domProps as React.HTMLAttributes<HTMLElement>, children);
      }
    }
  };
});

if (typeof window !== "undefined") {
  class IntersectionObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  // @ts-expect-error - test environment shim
  window.IntersectionObserver = IntersectionObserverMock;
}
