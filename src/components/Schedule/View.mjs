import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ScheduleContainer = styled.div`
`;

export default class VideoView extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;
    return (
      <div className={className}>Insert schedule here...</div>
    );
  }
}
