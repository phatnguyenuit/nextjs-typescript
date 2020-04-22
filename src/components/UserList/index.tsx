import React, { memo } from 'react';
import { Button } from '@material-ui/core';
import { useUserState, useUserActions } from './utils';

export const UserListComponent: React.FC = () => {
  const { loading, error, data: users = [] } = useUserState();
  const { handleRequestUser } = useUserActions();
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleRequestUser}>
        Load Users
      </Button>
      <hr />
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {users.length > 0 && (
        <div>
          <b>Loaded Users</b>
          <ul>
            {users.map(({ id, name, email }) => (
              <li key={id}>{`${name} <${email}>`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const UserList = memo(UserListComponent);
UserList.displayName = 'UserList';

export default UserList;
