import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' })
      }
    }, 2000)
  })
}

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then(data => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch(err => console.log(err))
  }, [])


  const deleteUser = (name) => {
    const filteredUsers = users.filter(user => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <>
      <Wrapper>
        <StyledTitle>Add new student</StyledTitle>
        <FormField name="name" label="Name" id="name" />
        <FormField name="attendance" label="Attendance" id="attendance" />
        <FormField name="average" label="Average" id="average" />
        <Button>Add</Button>
      </Wrapper>
      <Wrapper>
        <StyledTitle>{isLoading ? 'Loading...' : 'Users list'}</StyledTitle>
        <StyledList>
          {users.map((userData, index) => (
            <UsersListItem deleteUser={deleteUser} userData={userData} key={index} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  )
}
