import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import { ENTER_VIDEO_URL, SET_VIDEO_DURATION, SET_VIDEO_URL } from '../actionTypes';

// actions
export const enterVideoUrl = url => ({
  payload: url,
  type: ENTER_VIDEO_URL,
});

export const setVideoDuration = duration => ({
  payload: duration,
  type: SET_VIDEO_DURATION,
});

export const setVideoUrl = url => ({
  payload: url,
  type: SET_VIDEO_URL,
});

// reducer
const INITIAL_STATE = {
  duration: null,
  url: '',
  urlInput: '',
};

export const reducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case ENTER_VIDEO_URL: {
      const urlInput = payload;
      if (urlInput === state.urlInput) {
        return state;
      }
      return {
        ...state,
        urlInput,
      };
    }
    case SET_VIDEO_DURATION: {
      const duration = payload;
      if (duration === state.duration) {
        return state;
      }
      return {
        ...state,
        duration,
      };
    }
    case SET_VIDEO_URL: {
      const url = payload;
      if (url === state.url) {
        return state;
      }
      return {
        ...state,
        url,
      };
    }
    default:
      return state;
  }
};

// selectors
export const getVideoUrl = state => state.video.url;
export const getVideoUrlInput = state => state.video.urlInput;

// saga
const enterVideoUrlSaga = function* ({ payload: url }) {
  yield delay(1000);
  yield put(setVideoUrl(url));
};

export const saga = function* () {
  yield takeLatest(ENTER_VIDEO_URL, enterVideoUrlSaga);
};
