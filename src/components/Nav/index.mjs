import { connect } from 'react-redux';
import { getCurrentThemeId, getPresetConfigs, selectTheme } from '../../services';
import View from './View';

const mapStateToProps = state => ({
  currentThemeId: getCurrentThemeId(state),
  themePresets: getPresetConfigs(state),
});

const mapDispatchToProps = dispatch => ({
  onThemeSelect: id => dispatch(selectTheme(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
