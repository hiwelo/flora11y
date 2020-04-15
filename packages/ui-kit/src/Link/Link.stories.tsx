import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';

import Link from '.';

export default {
  component: Link,
  decorators: [withKnobs],
  title: 'Link',
};

export const overview: React.FC = () => (
  <Link href={text('Destination', '')}>{text('Content', 'Hello World!')}</Link>
);
