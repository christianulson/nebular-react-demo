import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { NebularProvider } from '@nebular-react/styles';
import { LightTheme } from '../../../themes/light.theme';
import { DesktopDemo } from './DesktopDemo';

describe('DesktopDemo', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('renders the desktop inside the classic page and links to fullscreen', () => {
    render(
      <MemoryRouter>
        <NebularProvider theme={LightTheme}>
          <DesktopDemo />
        </NebularProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Desktop embedded in the classic layout/i)).toBeInTheDocument();
    expect(
      screen.getByRole('region', { name: 'Embedded Nebular desktop demo' })
    ).toBeInTheDocument();
    expect(screen.getByRole('dialog', { name: 'Welcome' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /launch fullscreen mode/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'REST adapter (mock)' })).toBeInTheDocument();
  });
});
