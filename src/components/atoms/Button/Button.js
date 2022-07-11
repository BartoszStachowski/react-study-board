import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './Button.styles';

export const Button = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
)
