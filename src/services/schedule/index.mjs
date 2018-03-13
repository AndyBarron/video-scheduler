import shortid from 'shortid';
import { ADD_SCHEDULE_ENTRY, REMOVE_SCHEDULE_ENTRY } from '../actionTypes';

export const addScheduleEntry = entry => ({
  payload: entry,
  type: ADD_SCHEDULE_ENTRY,
});

export const removeScheduleEntry = id => ({
  payload: id,
  type: REMOVE_SCHEDULE_ENTRY,
});

const INITIAL_STATE = {
  entries: [],
};

export const getScheduleEntries = state => state.schedule.entries;

const compareEntriesByTime = ({ time: a }, { time: b }) => a.hour - b.hour || a.minute - b.minute;

export const reducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case ADD_SCHEDULE_ENTRY: {
      const entry = {
        ...payload,
        id: shortid.generate(),
      };
      return {
        ...state,
        entries: [...state.entries, entry].sort(compareEntriesByTime),
      };
    }
    case REMOVE_SCHEDULE_ENTRY: {
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
