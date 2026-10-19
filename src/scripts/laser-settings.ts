import type { LaserOptions } from './vendor/laser';

/** Homepage defaults. Copy settings from the dev panel here to publish a look. */
export const laserSettings: Required<LaserOptions> = {
  color: [1, 20 / 255, 147 / 255],
  offset: 122,
  width: 1,
  thickness: 11,
  core: .15,
  radius: 28,
  glow: 1,
  speed: .4,
  wave: 5,
  flicker: .16,
  reveal: 0,
  heat: 0,
  shimmer: 0,
  sparkle: 0,
  reactivity: .7,
};
