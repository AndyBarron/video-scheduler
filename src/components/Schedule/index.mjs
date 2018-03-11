import { connect } from 'react-redux';
import { getScheduleEntries } from '../../services/schedule';
import View from './View';

const mapStateToProps = state => ({
  entries: getScheduleEntries(state),
});

export default connect(mapStateToProps)(View);
