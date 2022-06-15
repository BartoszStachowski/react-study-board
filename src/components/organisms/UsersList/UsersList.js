import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';

export const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, index) => (
        <UsersListItem userData={userData} key={index} />
      ))}
    </StyledList>
  </Wrapper>
);
