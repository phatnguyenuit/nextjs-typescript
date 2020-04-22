import { Action, Store } from 'redux';
import { Task } from 'redux-saga';

export interface PayloadAction<TPayload = any> extends Action<string> {
  payload: TPayload;
}

export interface WithSagaTaskStore extends Store {
  sagaTask?: Task;
}
