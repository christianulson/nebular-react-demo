import React from 'react';
import { screen } from '@testing-library/react';
import { OverlaysDemo } from './OverlaysDemo';
import { renderWithTheme } from '../../../test/render';

describe('OverlaysDemo', () => {
  it('renders the overlay and editor sections', () => {
    renderWithTheme(<OverlaysDemo />);

    expect(screen.getByText('Drawer')).toBeInTheDocument();
    expect(screen.getByText('Confirm dialog')).toBeInTheDocument();
    expect(screen.getByText('Command palette')).toBeInTheDocument();
    expect(screen.getByText('Hover card')).toBeInTheDocument();
    expect(screen.getByText('Rich text editor')).toBeInTheDocument();
  });
});
