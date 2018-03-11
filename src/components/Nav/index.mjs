import { connect } from 'react-redux';
import { getPresetConfigs } from '../../services/theme';
import View from './View';

const mapStateToProps = state => ({
  themePresets: getPresetConfigs(state),
});

export default connect(mapStateToProps)(View);
