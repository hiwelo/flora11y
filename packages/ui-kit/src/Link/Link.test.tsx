/* eslint-disable jsx-a11y/anchor-is-valid */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';

import Link from '.';

const callback = jest.fn();

const testElements = (
  <>
    <Link data-testid="defaultLink" href="#test">
      Hello World!
    </Link>
    <Link data-testid="targetBlankLink" target="_blank" href="#test">
      Hello World!
    </Link>
    <Link
      data-testid="targetBlankLinkWithRelOverride"
      href="#test"
      rel={undefined}
      target="_blank"
    >
      Hello World!
    </Link>
    <Link
      data-testid="targetBlankLinkWithCustomRel"
      href="#test"
      rel="noopener"
      target="_blank"
    >
      Hello World!
    </Link>
    <Link data-testid="linkWithoutHref" onClick={callback}>
      Hello World!
    </Link>
  </>
);

describe('<Link />', () => {
  it('should adapt the markup based on the provided props', () => {
    expect.assertions(2);
    render(testElements);

    expect(screen.queryByTestId('defaultLink')?.tagName).toBe('A');
    expect(screen.queryByTestId('linkWithoutHref')?.tagName).toBe('BUTTON');
  });

  it('should add a rel="noopener noreferrer" to link with target="_blank"', () => {
    expect.assertions(6);
    render(testElements);

    const linkWithTargetBlank = screen.queryByTestId('targetBlankLink');
    const linkWithTargetBlankAndRelOverride = screen.queryByTestId(
      'targetBlankLinkWithRelOverride',
    );
    const linkWithTargetBlankAndCustomRel = screen.queryByTestId(
      'targetBlankLinkWithCustomRel',
    );

    // expect rel to be added by default
    expect(linkWithTargetBlank).toHaveAttribute('target', '_blank');
    expect(linkWithTargetBlank).toHaveAttribute('rel', 'noopener noreferrer');

    // expect rel to not be there if the addition was overwritten
    expect(linkWithTargetBlankAndRelOverride).toHaveAttribute(
      'target',
      '_blank',
    );
    expect(linkWithTargetBlankAndRelOverride).not.toHaveAttribute('rel');

    // expect rel to return a custom one if provided
    expect(linkWithTargetBlankAndCustomRel).toHaveAttribute('target', '_blank');
    expect(linkWithTargetBlankAndCustomRel).toHaveAttribute('rel', 'noopener');
  });

  it('should match snapshot', () => {
    expect.hasAssertions();
    const container = create(testElements);

    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(container.toJSON()).toMatchSnapshot();
  });
});
