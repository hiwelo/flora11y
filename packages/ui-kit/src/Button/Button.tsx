import React from 'react';
import StyledButton from './components/StyledButton';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const isLink = 'href' in rest;
  const isButton = !isLink;

  return (
    <StyledButton
      Element={isLink ? 'a' : 'button'}
      type={isButton ? 'button' : undefined}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
