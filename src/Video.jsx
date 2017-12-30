import React from 'react';
import ReactPlayer from 'react-player';

export default class Video extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <ReactPlayer />
      </div>
    );
  }
}
