import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';

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
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users list'}</h1>
      <StyledList>
        {users.map((userData, index) => (
          <UsersListItem deleteUser={deleteUser} userData={userData} key={index} />
        ))}
      </StyledList>
    </Wrapper>
  )
}
