import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { getCurrentTime } from '../../utils';
import Button from '../Button';
import ScheduleEntryEditor from '../ScheduleEntryEditor';

const createEntry = () => ({
  days: [
    false,
    true,
    true,
    true,
    true,
    true,
    false,
  ],
  time: getCurrentTime(),
  timing: 'end',
});

const ScheduleFooter = styled.div`
  text-align: right;
`;

export default class ScheduleView extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        days: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired,
        id: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        timing: PropTypes.oneOf(['start', 'end']).isRequired,
      }).isRequired,
    ).isRequired,
    onEntryAdd: PropTypes.func.isRequired,
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
      addingEntry: createEntry(),
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

  handleEntryAdd = () => {
    this.props.onEntryAdd(this.state.addingEntry);
    this.handleCancelAddClick();
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
          onSave={this.handleEntryAdd}
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
          entries.map(entry => (
            <pre key={entry.id}>{ JSON.stringify(entry, null, 2) }</pre>
          ))
        }
        <ScheduleFooter>
          { this.renderFooterContents() }
        </ScheduleFooter>
      </div>
    );
  }
}
