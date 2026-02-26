export const NAVBAR_SHRINK_MIN_PERCENT = 10;
export const NAVBAR_SHRINK_MAX_PERCENT = 21;

type NavbarShrinkOptions = {
  startScrollY?: number;
  endScrollY?: number;
  minPercent?: number;
  maxPercent?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function getNavbarShrinkPercent(scrollY: number, options: NavbarShrinkOptions = {}) {
  const startScrollY = options.startScrollY ?? 24;
  const endScrollY = options.endScrollY ?? 280;
  const minPercent = options.minPercent ?? NAVBAR_SHRINK_MIN_PERCENT;
  const maxPercent = options.maxPercent ?? NAVBAR_SHRINK_MAX_PERCENT;

  const safeStart = Math.max(0, startScrollY);
  const safeEnd = Math.max(safeStart + 1, endScrollY);
  const progress = clamp((scrollY - safeStart) / (safeEnd - safeStart), 0, 1);

  return minPercent + (maxPercent - minPercent) * progress;
}

export function getNavbarSideInsetPercent(shrinkPercent: number) {
  return shrinkPercent / 2;
}
