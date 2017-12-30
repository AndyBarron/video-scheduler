import { connect } from 'react-redux';
import Schedule from './Schedule';

const mapStateToProps = (state) => {
  return {
    scheduleEntries: state.scheduleEntries,
  };
};

export default connect(mapStateToProps)(Schedule);
