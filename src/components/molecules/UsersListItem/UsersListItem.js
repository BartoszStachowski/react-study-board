import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
import { UserShape } from 'types';
import { UsersContext } from 'views/Root';

export const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const ctx = useContext(UsersContext)
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
      <DeleteButton onClick={() => ctx.deleteUser(name)} />
    </Wrapper>
  )
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};
