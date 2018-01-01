import { connect } from 'react-redux';
import Video from './Video';

const mapStateToProps = (state) => {
  return {
    scheduleEntries: state.scheduleEntries,
    showVideo: state.showVideo,
    url: state.videoUrl,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeShowVideo: (show) => {
      dispatch({
        payload: { show },
        type: 'SET_SHOW_VIDEO',
      });
    },
    onChangeUrl: (url) => {
      dispatch({
        payload: { url },
        type: 'SET_VIDEO_URL',
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);
