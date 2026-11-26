import React from 'react';
import { screen } from '@testing-library/react';
import { MoreChartsDemo } from './MoreChartsDemo';
import { renderWithTheme } from '../../../test/render';

describe('MoreChartsDemo', () => {
  it('renders every additional chart', () => {
    renderWithTheme(<MoreChartsDemo />);

    for (const title of [
      'BoxPlotChart',
      'BubbleChart',
      'CandlestickChart',
      'CalendarHeatmap',
      'ChordChart',
      'Dendrogram',
      'HexbinChart',
      'MekkoChart',
      'NetworkGraph',
      'ParallelCoordinates',
      'PictogramChart',
      'PolarAreaChart',
      'RadialBarChart',
      'SankeyChart',
      'StepLineChart',
      'StreamGraphChart',
      'SunburstChart',
      'ViolinPlot',
      'WaffleChart',
      'WordCloud',
      'ChartDataTable'
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument();
    }
  });
});
