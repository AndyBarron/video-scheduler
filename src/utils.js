/* eslint no-magic-numbers: 0, no-mixed-operators: 0 */

const REGEX_POSITIVE_INTEGER = /\d+/;

const inRange = (n, min, max) => min <= n && n <= max;

export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return hours * 60 * 60 + minutes * 60 + seconds;
};

export const timeFromTimeString = (s) => {
  let input = s.trim().replace(/\s+/g, '');
  const suffix = input.slice(-2);
  if (!(suffix === 'am' || suffix === 'pm')) {
    return null;
  }
  input = input.slice(0, -2);
  const parts = input.split(':');
  if (!(1 <= parts.length && parts.length <= 3)) {
    return null;
  }
  if (!parts.every((part) => REGEX_POSITIVE_INTEGER.test(part))) {
    return null;
  }
  const [hours, minutes = 0, seconds = 0] = parts.map((part) => Number(part));
  if (!(inRange(hours, 1, 12) && inRange(minutes, 0, 59) && inRange(seconds, 0, 59))) {
    return null;
  }
  return hours * 60 * 60 + minutes * 60 + seconds + (suffix === 'am' ? 0 : 12 * 60 * 60);
};

const twoDigits = (number) => {
  const rounded = Math.round(number);
  return rounded < 10 ? `0${rounded}` : `${rounded}`;
};

export const formatTime = (time) => {
  const seconds = time % 60;
  const remainingMinutes = (time - seconds) / 60;
  const minutes = remainingMinutes % 60;
  const rawHours = (remainingMinutes - minutes) / 60;
  const isPm = rawHours >= 12;
  const hours = (isPm ? rawHours - 12 : rawHours) || 12;
  const suffix = isPm ? 'pm' : 'am';
  const secondsPart = seconds ? `:${twoDigits(seconds)}` : '';
  return `${twoDigits(hours)}:${twoDigits(minutes)}${secondsPart}${suffix}`;
};

export const noop = () => { /* Do nothing */ };

export const preventDefault = (e) => e.preventDefault();
