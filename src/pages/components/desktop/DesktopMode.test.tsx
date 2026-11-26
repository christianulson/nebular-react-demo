import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { NebularProvider } from '@nebular-react/styles';
import { LightTheme } from '../../../themes/light.theme';
import { DesktopMode } from './DesktopMode';

function LocationProbe() {
  const location = useLocation();
  return <div data-testid="location">{`${location.pathname}${location.search}`}</div>;
}

function renderDesktopMode() {
  return render(
    <MemoryRouter initialEntries={['/desktop']}>
      <NebularProvider theme={LightTheme}>
        <LocationProbe />
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
    expect(screen.getByRole('button', { name: 'Reset desktop layout' })).toBeInTheDocument();
  });

  it('leaves the desktop mode when the exit action is clicked', () => {
    renderDesktopMode();

    fireEvent.click(screen.getByRole('button', { name: 'Exit desktop mode' }));

    expect(screen.getByText('Classic layout')).toBeInTheDocument();
  });

  it('keeps the URL in sync with the focused app and workspace', async () => {
    renderDesktopMode();

    fireEvent.click(screen.getByRole('button', { name: 'Open DataGrid' }));

    await waitFor(() =>
      expect(screen.getByTestId('location')).toHaveTextContent('/desktop?app=datagrid')
    );

    fireEvent.click(screen.getByRole('button', { name: 'Workspace Components' }));

    await waitFor(() =>
      expect(screen.getByTestId('location')).toHaveTextContent('workspace=components')
    );
    expect(screen.getByTestId('location')).toHaveTextContent('app=datagrid');
  });

  it('restores the default layout from the reset action', async () => {
    renderDesktopMode();

    fireEvent.click(screen.getByRole('button', { name: 'Open DataGrid' }));
    await screen.findByRole('dialog', { name: 'DataGrid' });

    fireEvent.click(screen.getByRole('button', { name: 'Reset desktop layout' }));

    expect(screen.queryByRole('dialog', { name: 'DataGrid' })).not.toBeInTheDocument();
    expect(screen.getByRole('dialog', { name: 'Welcome' })).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/desktop');
  });
});
