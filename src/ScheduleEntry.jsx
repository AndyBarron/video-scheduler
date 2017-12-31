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

export default class ScheduleEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      timeText: '',
      timing: '',
    };
    this.onEditStartBound = this.onEditStart.bind(this);
    this.onEditStopBound = this.onEditStop.bind(this);
  }
  onEditStart() {
    this.setState({
      editing: true,
      timeText: formatTime(this.props.time),
      timing: this.props.timing,
    });
  }
  onEditStop() {
    this.setState({
      editing: false,
    });
  }
  renderTime() {
    if (this.state.editing) {
      return (
        <div className='form-inline'>
          <select className='form-control mr-2'>
            <option>Start at</option>
            <option>End at</option>
          </select>
          <input type='text' readOnly value={this.state.timeText} className='form-control' />
        </div>
      );
    } else {
      return (
        <span>{getTimingPrefix(this.props.timing)} {formatTime(this.props.time)}</span>
      );
    }
  }
  renderButtons() {
    if (this.state.editing) {
      return (
        <div className='btn-group' role='group'>
          <button type='button' className='btn btn-primary'>Save</button>
          <button onClick={this.onEditStopBound} type='button' className='btn btn-light'>Cancel</button>
        </div>
      );
    } else {
      return (
        <button onClick={this.onEditStartBound} type='button' className='btn btn-light'>Edit</button>
      );
    }
  }
  render() {
    const { className, time, timing } = this.props;
    return (
      <div className={`card ${className || ''}`}>
        <div className='card-body d-flex flex-row justify-content-between align-items-center p-2'>
          <div style={{ flexGrow: 1 }}>
            { this.renderTime() }
          </div>
          <div>
            { this.renderButtons() }
          </div>
        </div>
      </div>
    );
  }
};
