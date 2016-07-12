import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { wrapStore } from 'react-chrome-redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { INITIALIZE } from './actionTypes';

import * as chromeStorage from './helpers/chromeStorage';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware)
  )
);

wrapStore(store, { portName: 'REPLACE_ELEMENT_EXT' });

sagaMiddleware.run(rootSaga);

store.dispatch({ type: INITIALIZE });

export default store;
