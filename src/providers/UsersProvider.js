import React, { useState } from 'react';
import { users as userData } from '../data/users';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => { },
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(userData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter(user => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    }
    setUsers([newUser, ...users]);
  }
  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}>
      {children}
    </UsersContext.Provider>
  )
};
