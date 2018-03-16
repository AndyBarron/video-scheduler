import { connect } from 'react-redux';
import { addScheduleEntry, getScheduleEntries } from '../../services';
import View from './View';

const mapStateToProps = state => ({
  entries: getScheduleEntries(state),
});

const mapDispatchToProps = dispatch => ({
  onEntryAdd: entry => dispatch(addScheduleEntry(entry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
