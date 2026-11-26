import React from 'react';
import { screen } from '@testing-library/react';
import { DataGridDemo } from './DataGridDemo';
import { renderWithTheme } from '../../../test/render';

describe('DataGridDemo', () => {
  it('renders the standard and virtualized grids', () => {
    renderWithTheme(<DataGridDemo />);

    expect(
      screen.getByText('DataGrid — sorting, filters, selection, resize and export')
    ).toBeInTheDocument();
    expect(screen.getByText('DataGrid — virtualized (500 rows)')).toBeInTheDocument();
  });
});
