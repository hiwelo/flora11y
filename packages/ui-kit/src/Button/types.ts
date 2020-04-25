import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Ensures the focusability of the button even when disabled
   * @default true
   */
  focusable?: boolean;
  /** Indicates an URL target for the current button (will render an anchor element) */
  href?: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
}
