import Color from 'color';
import memoize from 'lodash/memoize';
import { darken, getLuminance, lighten } from 'polished';

const memoizeArgs = (...args) => args.join('__');

const computeOffset = (color) => {
  const luminance = getLuminance(color);
  const dark = luminance <= 0.5;
  return (dark ? lighten : darken)(0.12, color);
};

export const offset = memoize(computeOffset, memoizeArgs);

const computeWithAlpha = (alpha, color) => Color(color).alpha(alpha).string();

export const withAlpha = memoize(computeWithAlpha, memoizeArgs);
