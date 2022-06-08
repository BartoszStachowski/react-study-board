import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

export const UsersList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);
