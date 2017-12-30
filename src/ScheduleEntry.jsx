import React from 'react';
import { formatTime } from './utils';

const getTimingPrefix = (timing) => {
  switch (timing) {
    case 'start':
      return 'Start at';
    case 'end':
      return 'End at';
    default:
      throw new Error(`Invalid timing enum: "${timing}"`);
  }
};

export default ({ className, time, timing }) => (
  <div className={`${className}`}>
    {getTimingPrefix(timing)} {formatTime(time)}
  </div>
);
