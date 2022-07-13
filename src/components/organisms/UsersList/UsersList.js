import React from 'react';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';

export const UsersList = ({ users }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData, index) => (
          <UsersListItem userData={userData} key={index} />
        ))}
      </StyledList>
    </>
  )
}
