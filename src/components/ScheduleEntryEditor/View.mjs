import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { offset } from '../../styles';
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
  justify-content: space-between;
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
    days: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired, // TODO: Enforce length = 7
    onUpdate: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
    timing: PropTypes.oneOf(['start', 'end']).isRequired,
  };

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

  handleDayChange = (index, checked) => {
    const days = this.props.days.slice();
    days[index] = checked;
    this.fireUpdate({ days });
  };

  handleTimeChange = (time) => {
    this.fireUpdate({ time });
  };

  render() {
    const { days, timing } = this.props;
    return (
      <Container>
        <Row>
          <TimingSelect
            onChange={console.log}
            options={TIMING_OPTIONS}
            value={timing}
          />
          <TimeInput
            onChange={this.handleTimeChange}
            value="12:45pm"
          />
        </Row>
        <Row wrapItems>
          {DAYS.map((label, index) => (
            <DayToggle
              key={label}
              checked={days[index]}
              label={label}
              onChange={checked => this.handleDayChange(index, checked)}
            />
          ))}
        </Row>
      </Container>
    );
  }
}
