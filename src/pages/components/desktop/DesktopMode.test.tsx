import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { NebularProvider } from '@nebular-react/styles';
import { LightTheme } from '../../../themes/light.theme';
import { DesktopMode } from './DesktopMode';

function renderDesktopMode() {
  return render(
    <MemoryRouter initialEntries={['/desktop']}>
      <NebularProvider theme={LightTheme}>
        <Routes>
          <Route path="/desktop" element={<DesktopMode />} />
          <Route path="/" element={<div>Classic layout</div>} />
        </Routes>
      </NebularProvider>
    </MemoryRouter>
  );
}

describe('DesktopMode', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the fullscreen desktop with the welcome window', () => {
    renderDesktopMode();

    expect(screen.getByRole('region', { name: 'Nebular React demo desktop' })).toBeInTheDocument();
    expect(screen.getByRole('dialog', { name: 'Welcome' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Exit desktop mode' })).toBeInTheDocument();
  });

  it('leaves the desktop mode when the exit action is clicked', () => {
    renderDesktopMode();

    fireEvent.click(screen.getByRole('button', { name: 'Exit desktop mode' }));

    expect(screen.getByText('Classic layout')).toBeInTheDocument();
  });
});
