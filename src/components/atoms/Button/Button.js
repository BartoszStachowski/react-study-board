import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './Button.styles';

export const Button = () => (
  <StyledButton>
    <DeleteIcon />
  </StyledButton>
)
