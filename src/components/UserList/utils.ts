import { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootState } from 'states/rootReducer';
import { actionCreators } from 'states/user';

const selector = ({ user }: RootState) => user;
export const useUserState = () => useSelector(selector, shallowEqual);

export const useUserActions = () => {
  const dispatch = useDispatch();
  const handleRequestUser = useCallback(() => {
    dispatch(actionCreators.requestUser());
  }, [dispatch]);
  return {
    dispatch,
    handleRequestUser,
  };
};
