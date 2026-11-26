import React from 'react';
import { render, screen } from '@testing-library/react';
import { NebularProvider } from '@nebular-react/styles';
import { ButtonsDemo } from './Buttons';
import { LightTheme } from '../../../themes/light.theme';

describe('ButtonsDemo', () => {
  it('renders the main button groups', () => {
    render(
      <NebularProvider theme={LightTheme}>
        <ButtonsDemo />
      </NebularProvider>
    );

    expect(screen.getByText('Hero Buttons')).toBeInTheDocument();
    expect(screen.getByText('Default Buttons')).toBeInTheDocument();
    expect(screen.getByText('Outline Buttons')).toBeInTheDocument();
    expect(screen.getByText('Ghost Buttons')).toBeInTheDocument();
    expect(screen.getByText('Button Groups')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBeGreaterThan(10);
  });
});
