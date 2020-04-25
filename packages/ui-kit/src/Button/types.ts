import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export type ButtonProps =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;
