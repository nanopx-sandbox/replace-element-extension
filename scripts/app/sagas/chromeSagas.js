import * as chromeStorage from '../helpers/chromeStorage';
import { takeEvery } from 'redux-saga';
import { take, put, call, select } from 'redux-saga/effects';
import { INITIALIZE } from '../actionTypes';

function *persistState() {
  const state = yield select((state) => state);
  yield chromeStorage.set('state', state);
}

function *loadState() {
  const { state } = yield chromeStorage.get('state');
  yield put({ type: INITIALIZE, payload: state });
}

export function *watchForInitAndLoadState() {
  let isLoadedState = false;
  while (!isLoadedState) {
    yield take(INITIALIZE);
    yield loadState();
    isLoadedState = true;
  }
}

export function *watchForStateChangeAndPersistState() {
  // Ignore INITIALIZE, but match everything else
  yield* takeEvery((action) => action.type !== INITIALIZE, persistState);
}

export default [
  watchForInitAndLoadState(),
  watchForStateChangeAndPersistState(),
];
