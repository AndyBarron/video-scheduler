import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Select } from '..';

/* eslint-disable sort-keys */
const DAY_SELECT_OPTIONS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
].map(
  (label, value) => ({ label, value }),
);
/* eslint-enable sort-keys */

const Container = styled.div`
  border: 1px solid ${ props => props.theme.colorTextDefault };
  padding: 5px;
`;

export default class ScheduleEntryEditorView extends React.Component {
  static propTypes = {
    days: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired, // TODO: Enforce length = 7
    time: PropTypes.number.isRequired,
    timing: PropTypes.oneOfValue(['start', 'end']).isRequired,
  };

  state = {
    days: this.props.days,
    time: this.props.time,
    timing: this.props.timing,
  };

  render() {
    return (
      <Container>
        <Select
          options={DAY_SELECT_OPTIONS}
        />
      </Container>
    );
  }
}
