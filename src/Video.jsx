import React from 'react';
import ReactPlayer from 'react-player';
import { getCurrentTime } from './utils';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.updateInterval = null;
    this.playerRef = null;
    this.state = {
      duration: 0,
      playing: false,
    };
    this.onUrlUpdateBound = this.onUrlUpdate.bind(this);
    this.setPlayerRefBound = this.setPlayerRef.bind(this);
    this.onPlayerReadyBound = this.onPlayerReady.bind(this);
  }
  componentDidMount() {
    this.updateInterval = setInterval(this.update.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }
  update() {
    const playing = this.state.playing;
    const shouldBePlaying = this.shouldBePlaying();
    if (playing === shouldBePlaying) {
      return;
    }
    if (shouldBePlaying) {
      this.playerRef.seekTo(0);
    }
    this.setState({ playing: shouldBePlaying });
  }
  computeStartTimes() { // TODO: Cache this function somehow
    return this.props.scheduleEntries.map(({ time, timing }) => {
      switch (timing) {
        case 'start':
          return time;
        case 'end':
          return time - this.state.duration;
        default:
          throw new Error(`computeStartTimes: invalid timing option "${timing}"`);
      }
    });
  }
  shouldBePlaying() {
    const startTimes = this.computeStartTimes();
    return startTimes.some((start) => {
      const end = start + this.state.duration + 2; // Margin for error
      const now = getCurrentTime();
      return start <= now && now <= end;
    });
  }
  onPlayerReady() {
    const duration = this.playerRef.getDuration();
    this.setState({ duration });
  }
  onUrlUpdate(e) {
    this.props.onChangeUrl(e.target.value);
  }
  setPlayerRef(ref) {
    this.playerRef = ref;
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
              <ReactPlayer
                onReady={this.onPlayerReadyBound}
                playing={this.state.playing}
                ref={this.setPlayerRefBound}
                url={this.props.url}
                width='100%'
              /> :
              null
          }
        </div>
      </div>
    );
  }
}
