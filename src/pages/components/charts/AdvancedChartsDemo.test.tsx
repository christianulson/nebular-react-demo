import React from 'react';
import { screen } from '@testing-library/react';
import { AdvancedChartsDemo } from './AdvancedChartsDemo';
import { renderWithTheme } from '../../../test/render';

describe('AdvancedChartsDemo', () => {
  it('renders the advanced chart sections', () => {
    renderWithTheme(<AdvancedChartsDemo />);

    expect(screen.getByText('Funnel chart')).toBeInTheDocument();
    expect(screen.getByText('TreeMap chart')).toBeInTheDocument();
    expect(screen.getByText('Waterfall chart')).toBeInTheDocument();
    expect(screen.getByText('Bullet chart')).toBeInTheDocument();
    expect(screen.getByText('Radar chart')).toBeInTheDocument();
    expect(screen.getByText('Gauge')).toBeInTheDocument();
    expect(screen.getByText('Heatmap')).toBeInTheDocument();
    expect(screen.getByText('Combo chart')).toBeInTheDocument();
    expect(screen.getByText('Stacked bar chart')).toBeInTheDocument();
    expect(screen.getByText('Exportable chart')).toBeInTheDocument();
  });
});
