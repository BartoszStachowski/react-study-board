import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { users as userData } from 'data/users';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Dashboard } from './Dashboard';
import { AddUser } from './AddUser';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
}

const Root = () => {
  const [users, setUsers] = useState(userData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter(user => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    }

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Dashboard deleteUser={deleteUser} users={users} /> } />
              <Route
                path="/add-user"
                element={<AddUser formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />}
              />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
};

export default Root
