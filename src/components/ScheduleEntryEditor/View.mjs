import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import warning from 'warning';
import { offset } from '../../styles';
import { formatTime, parseTimeString } from '../../utils';
import Button from '../Button';
import Select from '../Select';
import TextInput from '../TextInput';
import Toggle from '../Toggle';

/* eslint-disable sort-keys */
const DAYS = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

const TIMING_OPTIONS = [
  { label: 'Start at', value: 'start' },
  { label: 'End at', value: 'end' },
];

const Container = styled.div`
  align-items: stretch;
  background: ${ props => offset(props.theme.colorBackgroundDefault) };
  display: flex;
  flex-flow: column nowrap;
  padding: 10px;
  & > *:not(:first-child) {
    margin-top: 5px;
  }
`;

const Row = styled.div`
  align-items: stretch;
  display: flex;
  flex-flow: row ${ props => (props.wrapItems ? 'wrap' : 'nowrap') };
  justify-content: ${ props => props.justify || 'space-between' };
  margin: -5px;
  & > * {
    margin: 5px;
  }
`;

const TimingSelect = styled(Select)`
  flex-basis: 100px;
  text-align: left;
`;

const TimeInput = styled(TextInput)`
  flex-grow: 1;
`;

const DayToggle = styled(Toggle)`
  flex-basis: 0;
  flex-grow: 0;
  flex-shrink: 0;
`;

export default class ScheduleEntryEditorView extends React.Component {
  static propTypes = {
    adding: PropTypes.bool,
    days: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired, // TODO: Enforce length = 7
    id: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    onCancel: PropTypes.func.isRequired,
    onDelete: PropTypes.func,
    onSave: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
    timing: PropTypes.oneOf(['start', 'end']).isRequired,
  };

  static defaultProps = {
    adding: false,
    id: null,
    onDelete: null,
  };

  state = {
    timeText: formatTime(this.props.time),
    timeTextValid: true,
  };

  get hasValidDays() {
    return this.props.days.some(on => on);
  }

  get isValid() {
    return this.state.timeTextValid && this.hasValidDays;
  }

  getDaySelectValue() {
    const list = [];
    this.props.days.forEach((selected, index) => {
      if (selected) {
        list.push(index);
      }
    });
    return list;
  }

  fireUpdate(changes) {
    const { days, onUpdate, time, timing } = this.props;
    const entry = {
      days,
      time,
      timing,
      ...changes,
    };
    onUpdate(entry);
  }

  handleCancel = () => {
    this.props.onCancel(this.props.id);
  };

  handleDayChange = (index, checked) => {
    const days = this.props.days.slice();
    days[index] = checked;
    this.fireUpdate({ days });
  };

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  handleSave = () => {
    invariant(
      this.isValid,
      'ScheduleEntryEditor: Cannot save when input is invalid',
    );
    this.props.onSave(this.props.id);
  };

  handleTimeChange = (timeText) => {
    this.setState({ timeText });
    try {
      const time = parseTimeString(timeText);
      this.setState({ timeTextValid: true });
      this.fireUpdate({ time });
    } catch (error) {
      this.setState({ timeTextValid: false });
    }
  };

  handleTimingChange = (timing) => {
    this.fireUpdate({ timing });
  };

  render() {
    const { adding, days, onDelete, timing } = this.props;
    const { timeText, timeTextValid } = this.state;
    warning(
      Boolean(adding) !== Boolean(onDelete),
      'ScheduleEntryEditor: Must specify either `adding` or `onDelete`, but not both',
    );
    return (
      <Container>
        <Row>
          <TimingSelect
            onChange={this.handleTimingChange}
            options={TIMING_OPTIONS}
            value={timing}
          />
          <TimeInput
            invalid={!timeTextValid}
            onChange={this.handleTimeChange}
            value={timeText}
          />
        </Row>
        <Row wrapItems>
          {DAYS.map((label, index) => (
            <DayToggle
              key={label}
              checked={days[index]}
              invalid={!this.hasValidDays}
              label={label}
              onChange={checked => this.handleDayChange(index, checked)}
            />
          ))}
        </Row>
        <Row justify="flex-end">
          <Button kind="default" onClick={this.handleCancel}>Cancel</Button>
          { onDelete && (<Button kind="danger" onClick={this.handleDelete}>Delete</Button>) }
          <Button disabled={!this.isValid} kind="primary" onClick={this.handleSave}>
            { adding ? 'Add' : 'Save' }
          </Button>
        </Row>
      </Container>
    );
  }
}
