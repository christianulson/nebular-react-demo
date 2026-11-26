import React from 'react';
import { screen } from '@testing-library/react';
import { NebularChartsDemo } from './NebularChartsDemo';
import { renderWithTheme } from '../../../test/render';

describe('NebularChartsDemo', () => {
  it('renders the basic chart sections', () => {
    renderWithTheme(<NebularChartsDemo />);

    expect(screen.getByText('Line chart')).toBeInTheDocument();
    expect(screen.getByText('Interactive legend & zoom')).toBeInTheDocument();
    expect(screen.getByText('Area chart')).toBeInTheDocument();
    expect(screen.getByText('Bar chart')).toBeInTheDocument();
    expect(screen.getByText('Donut chart')).toBeInTheDocument();
    expect(screen.getByText('Pie chart')).toBeInTheDocument();
    expect(screen.getByText('Scatter chart')).toBeInTheDocument();
    expect(screen.getByText('Sparkline')).toBeInTheDocument();
  });
});
