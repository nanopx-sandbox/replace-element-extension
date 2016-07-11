import chromeSagas from './chromeSagas';
import { put } from 'redux-saga/effects';

export default function* rootSaga() {
  // put
  yield [
    ...chromeSagas,
  ];
}
