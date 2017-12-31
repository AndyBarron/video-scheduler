import React from 'react';
import ScheduleEntry from './ScheduleEntry';

export default class Schedule extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2>Schedule</h2>
        {
          this.props.scheduleEntries.map(({ fresh, id, time, timing }) => (
            <ScheduleEntry
              fresh={fresh}
              id={id}
              key={id}
              time={time}
              timing={timing}
              onRemove={() => this.props.onRemoveEntry(id)}
              onUpdate={(entry) => this.props.onUpdateEntry(entry)}
            />
          ))
        }
        <div className='mt-2 text-right'>
          <button className='btn btn-primary' type='button' onClick={this.props.onAddClick}>+</button>
        </div>
      </div>
    );
  }
}
