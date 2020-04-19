import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'states/reducer';
import { actions } from 'states/foo';

const selector = ({ foo }: RootState) => foo;
const useFooState = () => useSelector(selector, shallowEqual);

const useFooActions = () => {
  const dispatch = useDispatch();
  const handleFoo = useCallback(() => {
    const randomStr = Math.random().toString(36).slice(2);
    dispatch(
      actions.foo(randomStr)
    );
  }, []);
  return {
    dispatch,
    handleFoo,
  };
};

const Hello: FC = ({ children }) => {
  const { foo } = useFooState();
  const { handleFoo } = useFooActions();
  return (
    <div>
      Hello {children}
      <br />
      <p>Foo: {foo}</p>
      <button onClick={handleFoo}>Foo</button>
    </div>
  );
};

export default Hello;
