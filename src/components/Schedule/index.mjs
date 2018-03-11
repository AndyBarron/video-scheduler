import { connect } from 'react-redux';
import { getScheduleEntries } from '../../services';
import View from './View';

const mapStateToProps = state => ({
  entries: getScheduleEntries(state),
});

export default connect(mapStateToProps)(View);
