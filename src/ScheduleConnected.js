import { connect } from 'react-redux';
import Schedule from './Schedule';
import { getCurrentTime } from './utils';

const mapStateToProps = (state) => {
  return {
    scheduleEntries: state.scheduleEntries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => {
      let time = getCurrentTime() + 300; // 5 minutes from now
      time -= time % 60;
      dispatch({
        type: 'ADD_SCHEDULE_ENTRY',
        payload: {
          entry: {
            id: Math.random(),
            fresh: true,
            time,
            timing: 'start',
          },
        },
      });
    },
    onRemoveEntry: (id) => {
      const confirmed = window.confirm('Are you sure?');
      if (!confirmed) {
        return;
      }
      dispatch({
        type: 'REMOVE_SCHEDULE_ENTRY',
        payload: { id },
      });
    },
    onUpdateEntry: (entry) => {
      dispatch({
        type: 'UPDATE_SCHEDULE_ENTRY',
        payload: { entry },
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
