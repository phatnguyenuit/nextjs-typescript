import { MakeStore } from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { RootState } from './reducer';
import { WithSagaTaskStore } from './types';
import rootSaga from './saga';

const makeStore: MakeStore = (initialState: RootState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store: WithSagaTaskStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default makeStore;
