import React from 'react';
import { formatTime, timeFromTimeString } from './utils';

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
    if (props.fresh) {
      props.onUpdate({
        id: props.id,
        time: props.time,
        timing: props.timing,
      });
      Object.assign(this.state, this.createEditState());
    }
    this.onEditStartBound = this.onEditStart.bind(this);
    this.onEditStopBound = this.onEditStop.bind(this);
    this.onTimingChangeBound = this.onTimingChange.bind(this);
    this.onTimeTextChangeBound = this.onTimeTextChange.bind(this);
    this.onUpdateClickBound = this.onUpdateClick.bind(this);
  }
  createEditState() {
    return {
      editing: true,
      timeText: formatTime(this.props.time),
      timeTextValid: true,
      timing: this.props.timing,
    }
  }
  onEditStart() {
    this.setState(this.createEditState());
  }
  onEditStop() {
    this.setState({
      editing: false,
    });
  }
  onTimeTextChange(e) {
    const timeText = e.target.value;
    const time = timeFromTimeString(timeText);
    this.setState({
      timeText,
      timeTextValid: time !== null,
    });
  }
  onTimingChange(e) {
    this.setState({
      timing: e.target.value,
    });
  }
  onUpdateClick(e) {
    this.props.onUpdate({
      id: this.props.id,
      time: timeFromTimeString(this.state.timeText),
      timing: this.state.timing,
    });
    this.onEditStop();
  }
  renderTime() {
    if (this.state.editing) {
      return (
        <div className='form-inline'>
          <select className='form-control mr-2' onChange={this.onTimingChangeBound}>
            <option value='start'>Start at</option>
            <option value='end'>End at</option>
          </select>
          <input
            type='text'
            onChange={this.onTimeTextChangeBound}
            value={this.state.timeText}
            className={`form-control ${this.state.timeTextValid ? '' : 'is-invalid'}`}
          />
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
          <button type='button' onClick={this.onUpdateClickBound}
            disabled={!this.state.timeTextValid} className='btn btn-primary'>Save</button>
          <button type='button' onClick={this.props.onRemove} className='btn btn-danger'>
            Delete
          </button>
          <button onClick={this.onEditStopBound} type='button' className='btn btn-light'>
            Cancel
          </button>
        </div>
      );
    } else {
      return (
        <button onClick={this.onEditStartBound} type='button' className='btn btn-light'>Edit</button>
      );
    }
  }
  render() {
    const { className } = this.props;
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
