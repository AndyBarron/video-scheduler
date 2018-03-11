import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button } from '..';

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
    onAddClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  handleAddClick = () => this.props.onAddClick();

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
          <Button kind="primary" onClick={this.handleAddClick}>Add to schedule</Button>
        </ScheduleFooter>
      </div>
    );
  }
}
