import React from 'react';
import ScheduleEntry from './ScheduleEntry';

export default class Schedule extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2>Schedule</h2>
        {
          this.props.scheduleEntries.map(({ time, timing }, i) => (
            <ScheduleEntry key={i} time={time} timing={timing} />
          ))
        }
      </div>
    );
  }
}
