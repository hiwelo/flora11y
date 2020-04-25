import { render, screen } from '@testing-library/react';
import React from 'react';
import { create, act } from 'react-test-renderer';

import Button from '.';

const testElements = (
  <>
    <Button data-testid="default">Hello World!</Button>
    <Button data-testid="link" href="#">
      Hello World!
    </Button>
    <Button data-testid="disabledButton" disabled>
      Hello World!
    </Button>
    <Button data-testid="disabledLink" disabled href="#">
      Hello World!
    </Button>
    <Button data-testid="focusableDisabledButton" disabled focusable>
      Hello World!
    </Button>
  </>
);

describe('<Button />', () => {
  it('should adapt the markup based on the provided props', () => {
    expect.assertions(2);
    render(testElements);

    expect(screen.queryByTestId('default')?.tagName).toBe('BUTTON');
    expect(screen.queryByTestId('link')?.tagName).toBe('A');
  });

  it('should always render a button when disabled, even with an URL target', () => {
    expect.assertions(2);
    render(testElements);

    expect(screen.queryByTestId('disabledButton')?.tagName).toBe('BUTTON');
    expect(screen.queryByTestId('disabledLink')?.tagName).toBe('BUTTON');
  });

  it('should be render a focusable disabled button when requested', () => {
    expect.assertions(2);
    render(testElements);

    const disabledFocusableButton = screen.queryByTestId(
      'focusableDisabledButton',
    );
    const disabledButton = screen.queryByTestId('disabledButton');

    act(() => {
      if (!disabledFocusableButton) return;

      disabledFocusableButton.focus();
    });

    expect(document.activeElement).toBe(disabledFocusableButton);

    act(() => {
      if (!disabledButton) return;

      disabledButton.focus();
    });

    expect(document.activeElement).not.toBe(disabledButton);
  });

  it('should match snapshot', () => {
    expect.hasAssertions();
    const container = create(testElements);

    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(container.toJSON()).toMatchSnapshot();
  });
});
