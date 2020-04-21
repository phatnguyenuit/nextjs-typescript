import { MakeStore } from 'next-redux-wrapper';
import { createStore } from 'redux';
import rootReducer, { RootState } from './reducer';

const makeStore: MakeStore = (initialState: RootState) =>
  createStore(rootReducer, initialState);

export default makeStore;
