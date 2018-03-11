import { connect } from 'react-redux';
import { enterVideoUrl, getVideoUrl, getVideoUrlInput, setVideoDuration } from '../../services';
import View from './View';

const mapStateToProps = state => ({
  url: getVideoUrl(state),
  urlInput: getVideoUrlInput(state),
});

const mapDispatchToProps = dispatch => ({
  onDurationUpdate: millis => dispatch(setVideoDuration(millis)),
  onUrlChange: url => dispatch(enterVideoUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
