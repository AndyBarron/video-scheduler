
const ADD_SCHEDULE_ENTRY_ACTION = 'schedule/ADD_SCHEDULE_ENTRY';
const REMOVE_SCHEDULE_ENTRY_ACTION = 'schedule/REMOVE_SCHEDULE_ENTRY';

export const addScheduleEntry = entry => ({
  payload: entry,
  type: ADD_SCHEDULE_ENTRY_ACTION,
});

export const removeScheduleEntry = id => ({
  payload: id,
  type: REMOVE_SCHEDULE_ENTRY_ACTION,
});

const INITIAL_STATE = {
  entries: [],
};

const compareEntriesByTime = ({ time: a }, { time: b }) => a.hour - b.hour || a.minute - b.minute;

export const reducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case ADD_SCHEDULE_ENTRY_ACTION: {
      const entry = payload;
      return {
        ...state,
        entries: [...state.entries, entry].sort(compareEntriesByTime),
      };
    }
    case REMOVE_SCHEDULE_ENTRY_ACTION: {
      const id = payload;
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== id),
      };
    }
    default:
      return state;
  }
};
