import React from 'react';

import StyledButton from './components/StyledButton';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  focusable,
  href,
  ...rest
}) => {
  const isLink = !!href && !disabled;
  const isButton = !isLink;
  const isDisabled = isButton && disabled;

  return (
    <StyledButton
      Element={isLink ? 'a' : 'button'}
      aria-disabled={disabled}
      disabled={(isDisabled && !focusable) || undefined}
      href={isLink ? href : undefined}
      type={isButton ? 'button' : undefined}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
