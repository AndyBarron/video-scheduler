import PropTypes from 'prop-types';
import React from 'react';

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
      <div className={className}>Insert video here...</div>
    );
  }
}
