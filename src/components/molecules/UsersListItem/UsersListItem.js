import React from 'react';
import PropTypes from 'prop-types';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
import { UserShape } from 'types';

export const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};
