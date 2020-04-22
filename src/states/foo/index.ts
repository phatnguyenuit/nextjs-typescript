import { PayloadAction } from 'types/state';
import { createReducer } from 'utils/reducer';

const getInitialState = () => ({
  foo: '',
});

export const actions = {
  foo: (value: string): PayloadAction<string> => ({
    type: 'foo',
    payload: value,
  }),
};

const reducer = createReducer(getInitialState(), {
  foo: (state, action: PayloadAction<string>) => ({
    ...state,
    foo: action.payload,
  }),
});

export default reducer;
