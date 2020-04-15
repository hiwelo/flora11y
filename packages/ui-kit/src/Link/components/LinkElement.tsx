/* eslint-disable jsx-a11y/anchor-has-content */
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { LinkProps } from '../types';

const ComputedElement: FunctionComponent<LinkProps> = ({ href, ...rest }) =>
  href ? <a href={href} {...rest} /> : <button type="button" {...rest} />;

const LinkElement = styled(ComputedElement)`
  button& {
    background: transparent;
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
  }
`;

export default LinkElement;
