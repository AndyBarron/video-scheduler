
const REGEX_POSITIVE_INTEGER = /\d+/;

const inRange = (n, min, max) => min <= n && n <= max;

const timeFromTimeString = (s) => {
  let input = s.trim().replace(/\s+/g, '');
  const suffix = input.slice(-2);
  if (!(suffix === 'am' || suffix === 'pm')) {
    return null;
  }
  input = input.slice(0, -2);
  const parts = input.split(':');
  if (!(2 <= parts.length && parts.length <= 3)) {
    return null;
  }
  if (!parts.every((part) => REGEX_POSITIVE_INTEGER.test(part))) {
    return null;
  }
  const [ hours, minutes, seconds = 0 ] = parts.map((part) => Number(part));
  if (!(inRange(hours, 1, 12) && inRange(minutes, 0, 59) && inRange(seconds, 0, 59))) {
    return null;
  }
  return hours * 60 * 60 + minutes * 60 + seconds + (suffix === 'am' ? 0 : 12 * 60 * 60);
};

export const formatTime = (time) => {
  const seconds = time % 60;
  console.log(seconds);
  const remainingMinutes = (time - seconds) / 60;
  const minutes = remainingMinutes % 60;
  const rawHours = (remainingMinutes - minutes) / 60;
  const hours = rawHours || 12;
  const isPm = rawHours >= 12;
  const suffix = isPm ? 'pm' : 'am';
  const secondsPart = seconds ? `:${twoDigits(seconds)}` : '';
  return `${twoDigits(hours)}:${twoDigits(minutes)}${secondsPart}${suffix}`;
}

const twoDigits = (number) => {
  const rounded = Math.round(number);
  return rounded < 10 ? `0${rounded}` : `${rounded}`;
}

export const noop = () => {};

export const preventDefault = (e) => e.preventDefault();
