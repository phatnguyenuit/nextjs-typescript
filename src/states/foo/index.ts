import { PayloadAction } from '../types';

const getInitialState = () => ({
  foo: '',
});

export const actions = {
  foo: (value: string): PayloadAction<string> => ({
    type: 'foo',
    payload: value,
  }),
};

const reducer = (
  prevState = getInitialState(),
  action: PayloadAction<string>,
) => {
  switch (action.type) {
    case 'foo':
      return { ...prevState, foo: action.payload };
    default:
      return prevState;
  }
};

export default reducer;
