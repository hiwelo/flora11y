import React, { FunctionComponent } from 'react';

import LinkElement from './components/LinkElement';
import { LinkProps } from './types';

const Link: FunctionComponent<LinkProps> = ({
  children,
  href,
  target,
  ...rest
}) => {
  const isLink = !!href;
  const computedRel = target === '_blank' ? 'noopener noreferrer' : undefined;
  const relAttr = isLink ? computedRel : undefined;
  const targetAttr = isLink ? target : undefined;

  return (
    <LinkElement href={href} rel={relAttr} target={targetAttr} {...rest}>
      {children}
    </LinkElement>
  );
};

export default Link;
