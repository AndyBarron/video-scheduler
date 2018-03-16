
const REGEX_POSITIVE_INTEGER = /\d+/;

const inRange = (n, min, max) => min <= n && n <= max;

const twoDigits = (number) => {
  const rounded = Math.round(number);
  return rounded < 10 ? `0${ rounded }` : `${ rounded }`;
};

export const getCurrentTime = () => {
  const now = new Date();
  return (now.getHours() * 60 * 60 * 1000) + (now.getMinutes() * 60 * 1000);
};

export const formatTime = (ms) => {
  const time = Math.round(ms / 1000);
  const seconds = time % 60;
  const remainingMinutes = (time - seconds) / 60;
  const minutes = remainingMinutes % 60;
  const rawHours = (remainingMinutes - minutes) / 60;
  const isPm = rawHours >= 12;
  const hours = (isPm ? rawHours - 12 : rawHours) || 12;
  const suffix = isPm ? 'pm' : 'am';
  const secondsPart = seconds ? `:${ twoDigits(seconds) }` : '';
  return `${ twoDigits(hours) }:${ twoDigits(minutes) }${ secondsPart }${ suffix }`;
};

export const parseTimeString = (s) => {
  let input = s.trim().replace(/\s+/g, '');
  const suffix = input.slice(-2);
  if (!(suffix === 'am' || suffix === 'pm')) {
    throw new Error('Invalid time string: Bad suffix');
  }
  input = input.slice(0, -2);
  const parts = input.split(':');
  if (!(parts.length >= 1 && parts.length <= 3)) {
    throw new Error('Invalid time string: Wrong number of parts');
  }
  if (!parts.every(part => REGEX_POSITIVE_INTEGER.test(part))) {
    throw new Error('Invalid time string: Invalid part');
  }
  const [hours, minutes = 0, seconds = 0] = parts.map(part => Number(part));
  if (!(inRange(hours, 1, 12) && inRange(minutes, 0, 59) && inRange(seconds, 0, 59))) {
    throw new Error('Invalid time string: Part out of range');
  }
  const time = (hours * 60 * 60) + (minutes * 60) + seconds + (suffix === 'am' ? 0 : 12 * 60 * 60);
  return time * 1000;
};
