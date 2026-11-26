import React from 'react';
import { screen } from '@testing-library/react';
import { InsightsDemo } from './InsightsDemo';
import { renderWithTheme } from '../../../test/render';

describe('InsightsDemo', () => {
  it('renders every insight section', () => {
    renderWithTheme(<InsightsDemo />);

    expect(screen.getByText('KpiCard')).toBeInTheDocument();
    expect(screen.getByText('LogViewer')).toBeInTheDocument();
    expect(screen.getByText('TraceWaterfall')).toBeInTheDocument();
    expect(screen.getByText('ChatSources')).toBeInTheDocument();
    expect(screen.getByText('ConflictResolutionDialog')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Compare document versions' })).toBeInTheDocument();
  });
});
