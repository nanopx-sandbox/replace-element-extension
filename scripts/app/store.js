import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware)
  )
);

export default store;
