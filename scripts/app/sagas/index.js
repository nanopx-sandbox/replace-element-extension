import chromeActionSagas from './chromeActionSagas';

export default function* rootSaga() {
  yield [
    ...chromeActionSagas,
  ];
}
