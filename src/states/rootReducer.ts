import { combineReducers } from 'redux';
import foo from './foo';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  foo,
  user: userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
