import { connect } from 'react-redux';
import Video from './Video';

const mapStateToProps = (state) => {
  return {
    url: state.videoUrl,
    scheduleEntries: state.scheduleEntries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUrl: (url) => {
      dispatch({
        payload: { url },
        type: 'SET_VIDEO_URL',
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);