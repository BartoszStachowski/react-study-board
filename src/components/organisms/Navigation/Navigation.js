import React from 'react';
import { StyledLink, Wrapper, Logo } from 'components/organisms/Navigation/Navigation.styled';

export const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>Study <br /> Board</h1>
      </Logo>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/">Settings</StyledLink>
      <StyledLink to="/">Logout</StyledLink>
    </Wrapper>
)
};
