/* eslint-disable no-console */
import { all, call, takeLatest } from 'redux-saga/effects';
import Axios, { AxiosResponse } from 'axios';
import { User } from 'types/common';

const getUser = () =>
  Axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users');

function* loadDataSaga() {
  try {
    const res: AxiosResponse<Array<User>> = yield call(getUser);
    const data: Array<User> = res.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield all([takeLatest('load_data', loadDataSaga)]);
}

export default rootSaga;
