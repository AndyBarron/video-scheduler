import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button, ScheduleEntryEditor } from '..';

const ScheduleFooter = styled.div`
  text-align: right;
`;

export default class ScheduleView extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.shape({
          hour: PropTypes.number.isRequired,
          minute: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  };

  static defaultProps = {
    className: '',
  };

  state = {
    adding: false,
    addingEntry: null,
  };

  handleAddClick = () => {
    this.setState({
      adding: true,
      addingEntry: {
        days: Array(7).fill(false),
        time: 0,
        timing: 'end',
      },
    });
  };

  handleCancelAddClick = () => {
    this.setState({
      adding: false,
      addingEntry: null,
    });
  };

  handledAddingEntryUpdate = (addingEntry) => {
    this.setState({ addingEntry });
  };

  renderFooterContents() {
    const { adding } = this.state;
    if (adding) {
      const { addingEntry: { days, time, timing } } = this.state;
      return (
        <ScheduleEntryEditor
          adding
          days={days}
          onCancel={this.handleCancelAddClick}
          onUpdate={this.handledAddingEntryUpdate}
          time={time}
          timing={timing}
        />
      );
    }
    return (
      <Button kind="primary" onClick={this.handleAddClick}>Add to schedule</Button>
    );
  }

  render() {
    const { className, entries } = this.props;
    return (
      <div className={className}>
        {
          entries.map(() => (
            <div>Entry!</div>
          ))
        }
        <ScheduleFooter>
          { this.renderFooterContents() }
        </ScheduleFooter>
      </div>
    );
  }
}
