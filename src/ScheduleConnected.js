import { connect } from 'react-redux';
import Schedule from './Schedule';
import { getCurrentTime } from './utils';

const NEW_TIME_OFFSET_SECONDS = 300; // 5 minutes
const MINUTE_SECONDS = 60;

const mapStateToProps = (state) => {
  return {
    scheduleEntries: state.scheduleEntries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => {
      let time = getCurrentTime() + NEW_TIME_OFFSET_SECONDS;
      time -= time % MINUTE_SECONDS;
      dispatch({
        payload: {
          entry: {
            fresh: true,
            id: Math.random(),
            time,
            timing: 'start',
          },
        },
        type: 'ADD_SCHEDULE_ENTRY',
      });
    },
    onRemoveEntry: (id) => {
      const confirmed = window.confirm('Are you sure?'); // eslint-disable-line no-alert
      if (!confirmed) {
        return;
      }
      dispatch({
        payload: { id },
        type: 'REMOVE_SCHEDULE_ENTRY',
      });
    },
    onUpdateEntry: (entry) => {
      dispatch({
        payload: { entry },
        type: 'UPDATE_SCHEDULE_ENTRY',
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
