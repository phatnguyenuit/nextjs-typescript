import { NextPage } from 'next';
import { actionCreators } from 'states/user';
import UserList from 'components/UserList';

const UserPage: NextPage = () => (
  <div>
    <p>UserPage</p>
    <UserList />
  </div>
);

UserPage.displayName = 'User';
export default UserPage;

UserPage.getInitialProps = async ({ store }) => {
  store.dispatch(actionCreators.requestUser());
};
