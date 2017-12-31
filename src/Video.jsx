import React from 'react';
import ReactPlayer from 'react-player';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.onUrlUpdateBound = this.onUrlUpdate.bind(this);
  }
  onUrlUpdate(e) {
    this.props.onChangeUrl(e.target.value);
  }
  render() {
    return (
      <div className={`pt-2 ${this.props.className}`}>
        <h2>Video</h2>
        <input
          className='form-control form-control-lg'
          type='text'
          placeholder='Video URL'
          onChange={this.onUrlUpdateBound}
          value={this.props.url}
        />
        <div className='mt-2'>
          {
            ReactPlayer.canPlay(this.props.url) ?
              <ReactPlayer url={this.props.url} width='100%' /> :
              null
          }
        </div>
      </div>
    );
  }
}
