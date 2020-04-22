import { createBasedAPIReducer, BasedAPIState } from 'utils/reducer';
import { User } from '../types';
import { actionTypes } from './index';

type UserState = BasedAPIState<Array<User>>;

const getInitialState = (): UserState => ({
  loading: false,
});

const reducer = createBasedAPIReducer(
  {
    request: actionTypes.request,
    success: actionTypes.success,
    error: actionTypes.error,
  },
  getInitialState(),
);

export default reducer;
