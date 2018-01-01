import { createStore } from 'redux';
import { sortBy } from 'lodash';

const INITIAL_STATE = {
  scheduleEntries: [],
  showVideo: true,
  videoUrl: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SHOW_VIDEO': {
      const { show } = action.payload;
      if (show === state.showVideo) {
        return state;
      }
      return { ...state, showVideo: show };
    }
    case 'SET_VIDEO_URL': {
      const { url } = action.payload;
      if (url === state.videoUrl) {
        return state;
      }
      return { ...state, videoUrl: action.payload.url };
    }
    case 'ADD_SCHEDULE_ENTRY': {
      const entries = [...state.scheduleEntries, action.payload.entry];
      const sorted = sortBy(entries, 'time');
      return { ...state, scheduleEntries: sorted };
    }
    case 'REMOVE_SCHEDULE_ENTRY': {
      const filtered = state.scheduleEntries.filter(({ id }) => id !== action.payload.id);
      return { ...state, scheduleEntries: filtered };
    }
    case 'UPDATE_SCHEDULE_ENTRY': {
      const updated = action.payload.entry;
      const updatedEntries = state.scheduleEntries.map((entry) => {
        return entry.id === updated.id ? updated : entry;
      });
      return { ...state, scheduleEntries: updatedEntries };
    }
    default:
      return state;
  }
};

export const create = (state = INITIAL_STATE) => {
  const store = createStore(reducer, state);
  window.store = store;
  return store;
};
