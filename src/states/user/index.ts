import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { Action } from 'redux';

import api, { USER_API_URL } from 'constants/api';
import { PayloadAction } from 'types/state';
import { User } from '../types';

export const actionTypes = {
  request: 'user/request',
  success: 'user/request/success',
  error: 'user/request/error',
};

export const actionCreators = {
  requestUser: (): Action<string> => ({
    type: actionTypes.request,
  }),
};

function* getUserWorker() {
  try {
    const response: AxiosResponse<User[]> = yield call(api.get, USER_API_URL);
    yield put<PayloadAction<User[]>>({
      type: actionTypes.success,
      payload: response.data,
    });
  } catch (e) {
    yield put<PayloadAction<Error>>({
      type: actionTypes.error,
      payload: e,
    });
  }
}

export default function* userSaga() {
  yield takeLatest(actionTypes.request, getUserWorker);
}
