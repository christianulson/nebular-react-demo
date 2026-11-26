import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { NebularProvider } from '@nebular-react/styles';
import { AlertDemo } from './Alert';
import { LightTheme } from '../../../themes/light.theme';

describe('AlertDemo', () => {
  it('renders all alert variations', () => {
    render(
      <NebularProvider theme={LightTheme}>
        <AlertDemo />
      </NebularProvider>
    );

    expect(screen.getByText('Colored Alert')).toBeInTheDocument();
    expect(screen.getByText('Outline Alert')).toBeInTheDocument();
    expect(screen.getByText('Accent Alert')).toBeInTheDocument();
    expect(screen.getAllByText('You have been successfully authenticated!')).toHaveLength(15);
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = render(
      <NebularProvider theme={LightTheme}>
        <AlertDemo />
      </NebularProvider>
    );

    const results = await axe(container);
    expect(results.violations).toEqual([]);
  });
});
