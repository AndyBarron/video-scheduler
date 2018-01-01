import React from 'react';
import ReactPlayer from 'react-player';
import { getCurrentTime } from './utils';

const REACT_PLAYER_CONFIG = {
  youtube: {
    playerVars: {
      disablekb: 1,
      iv_load_policy: 3,
      showinfo: 1,
    },
    preload: true,
  },
};

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    window.v = this;
    this.updateInterval = null;
    this.playerRef = null;
    this.state = {
      duration: 0,
      playing: false,
      percentLoaded: 0,
      percentPlayed: 0,
      ready: false,
    };
    this.onUrlUpdateBound = this.onUrlUpdate.bind(this);
    this.setPlayerRefBound = this.setPlayerRef.bind(this);
    this.onPlayerDurationBound = this.onPlayerDuration.bind(this);
    this.onPlayerProgressBound = this.onPlayerProgress.bind(this);
    this.onPlayerReadyBound = this.onPlayerReady.bind(this);
    this.onShowVideoChangeBound = this.onShowVideoChange.bind(this);
  }
  componentDidMount() {
    this.updateInterval = setInterval(this.update.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url) {
      this.setState({ ready: false });
    }
  }
  update() {
    const startTime = this.findCurrentStartTime();
    const shouldBePlaying = Boolean(startTime);
    if (this.state.playing === shouldBePlaying) {
      return;
    }
    if (this.playerRef) {
      const targetTime = shouldBePlaying ? getCurrentTime() - startTime : 0;
      this.playerRef.seekTo(targetTime);
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
  findCurrentStartTime() {
    const startTimes = this.computeStartTimes();
    const result = startTimes.find((start) => {
      const end = start + this.state.duration + 2; // Margin for error
      const now = getCurrentTime();
      return start <= now && now <= end;
    });
    return result === undefined ? null : result;
  }
  onPlayerDuration(duration) {
    this.setState({ duration });
  }
  onPlayerProgress({ loaded, played }) {
    this.setState({
      percentLoaded: loaded,
      percentPlayed: played,
    });
  }
  onPlayerReady() {
    this.setState({ ready: true });
  }
  onUrlUpdate(e) {
    this.props.onChangeUrl(e.target.value);
  }
  setPlayerRef(ref) {
    this.playerRef = ref;
  }
  computeLoadedPercentDifference() {
    if (this.state.percentPlayed >= this.state.percentLoaded) {
      return 0;
    }
    return this.state.percentLoaded - this.state.percentPlayed;
  }
  onShowVideoChange(e) {
    const checked = e.target.checked;
    this.props.onChangeShowVideo(checked);
  }
  render() {
    return (
      <div className={`${this.props.className || ''}`}>
        <h2>Video</h2>
        <div className='form-inline d-flex flex-row'>
          <input
            className='form-control form-control-md'
            type='text'
            placeholder='Video URL'
            onChange={this.onUrlUpdateBound}
            value={this.props.url}
            style={{ flexGrow: 1 }}
          />
          <div className="form-check form-check-inline ml-2 mr-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={this.props.showVideo}
              onChange={this.onShowVideoChangeBound}
            />
            <label className="form-check-label">Show video</label>
          </div>
        </div>
        <div className='mt-2' hidden={this.state.ready}>
          Loading...<br />
          (If the video doesn't load, double-check the URL.)
        </div>
        <div className='mt-2' hidden={!this.state.ready}>
          <div className="progress">
            <div
              className="progress-bar bg-primary"
              style={{ width: `${this.state.percentPlayed * 100}%` }}
            />
            <div
              className="progress-bar bg-info"
              style={{ width: `${this.computeLoadedPercentDifference() * 100}%` }}
            />
          </div>
          <div hidden={!this.props.showVideo} className='overlay-container mt-2'>
            {
              ReactPlayer.canPlay(this.props.url) ?
                <ReactPlayer
                  config={REACT_PLAYER_CONFIG}
                  onDuration={this.onPlayerDurationBound}
                  onProgress={this.onPlayerProgressBound}
                  onReady={this.onPlayerReadyBound}
                  playing={this.state.playing}
                  ref={this.setPlayerRefBound}
                  url={this.props.url}
                  width='100%'
                  playsinline={true}
                  progressFrequency={250}
                /> :
                null
            }
            <div className='overlay' />
          </div>
        </div>
      </div>
    );
  }
}
