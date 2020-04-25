import { text } from '@storybook/addon-knobs';
import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const overview: React.FC = () => (
  <Button>{text('Content', 'Hello World!')}</Button>
);

export const linkMarkup: React.FC = () => (
  <Button href={text('Hyperlink', '')}>
    {text('Content', 'Hello World!')}
  </Button>
);
