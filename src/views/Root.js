import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { users as userData } from 'data/users';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Dashboard } from 'views/Dashboard';
import { AddUser } from 'views/AddUser';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const Root = () => {
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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersContext.Provider
            value={{
              users,
              handleAddUser,
              deleteUser,
            }}>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-user" element={<AddUser />}  />
              </Routes>
            </Wrapper>
          </UsersContext.Provider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
};

export default Root
