import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getTheme } from '../../services/theme';
import View from './View';

const mapStateToProps = state => ({
  theme: getTheme(state),
});

export default compose(
  connect(mapStateToProps),
  hot(module),
)(View);
