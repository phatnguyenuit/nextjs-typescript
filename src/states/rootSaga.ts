import { all, fork } from 'redux-saga/effects';
import userSaga from './user/index';

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
