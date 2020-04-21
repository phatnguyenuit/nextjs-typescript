import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'states/reducer';
import { actions } from 'states/foo';

const selector = ({ foo }: RootState) => foo;
export const useFooState = () => useSelector(selector, shallowEqual);

export const useFooActions = () => {
  const dispatch = useDispatch();
  const handleFoo = useCallback(() => {
    const randomStr = Math.random().toString(36).slice(2);
    dispatch(actions.foo(randomStr));
  }, [dispatch]);
  return {
    dispatch,
    handleFoo,
  };
};
