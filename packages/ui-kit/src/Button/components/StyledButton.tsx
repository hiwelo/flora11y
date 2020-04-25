import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from '../types';

const Markup: React.FC<{
  Element: 'a' | 'button';
}> = ({ Element, ...rest }) => <Element {...rest} />;

const StyledButton = styled(Markup)<ButtonProps>`
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  color: black;
  font-size: 1em;
  text-decoration: none;
`;

export default StyledButton;
