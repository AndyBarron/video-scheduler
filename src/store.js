import { createStore } from 'redux';

const INITIAL_STATE = {
  playing: false,
  scheduleEntries: [{time: 60 * 60 * 12 + 1, timing: 'start'}],
  videoData: null,
  videoUrl: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_VIDEO_URL':
      return { ...state, videoUrl: action.data.url };
    default:
      return state;
  }
};

export const create = () => createStore(reducer);
