import React from 'react';
import { screen } from '@testing-library/react';
import { DataViewsDemo } from './DataViewsDemo';
import { renderWithTheme } from '../../../test/render';

describe('DataViewsDemo', () => {
  it('renders the data view sections and sample data', () => {
    renderWithTheme(<DataViewsDemo />);

    expect(screen.getByText('GanttChart')).toBeInTheDocument();
    expect(screen.getByText('PivotTable')).toBeInTheDocument();
    expect(screen.getByText('DiffViewer')).toBeInTheDocument();
    expect(screen.getByText('VirtualList (1.000 rows)')).toBeInTheDocument();
    expect(screen.getByText('InfiniteScroll')).toBeInTheDocument();
    expect(screen.getByText('North')).toBeInTheDocument();
    expect(screen.getByText('Row 1')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});
