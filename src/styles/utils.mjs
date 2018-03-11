import memoize from 'lodash/memoize';
import { darken, getLuminance, lighten } from 'polished';

const computeOffset = (color) => {
  const luminance = getLuminance(color);
  const dark = luminance <= 0.5;
  return (dark ? lighten : darken)(color);
};

export const offset = memoize(computeOffset, color => color);
