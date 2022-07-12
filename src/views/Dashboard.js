import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersList } from 'components/organisms/UsersList/UsersList';
import { UsersContext } from 'views/Root';

export const Dashboard = () => {
  const ctx = useContext(UsersContext)

  return (
    <ViewWrapper>
      <UsersList users={ctx.users} />
    </ViewWrapper>
  );
};
