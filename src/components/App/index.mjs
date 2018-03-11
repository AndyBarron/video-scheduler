import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { getTheme } from '../../services';
import View from './View';

const mapStateToProps = state => ({
  theme: getTheme(state),
});

const App = connect(mapStateToProps)(View);
export default hot(module)(App);
