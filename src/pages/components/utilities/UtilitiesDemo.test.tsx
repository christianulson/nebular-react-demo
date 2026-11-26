import React from 'react';
import { screen } from '@testing-library/react';
import { UtilitiesDemo } from './UtilitiesDemo';
import { renderWithTheme } from '../../../test/render';

describe('UtilitiesDemo', () => {
  it('renders the utility sections', () => {
    renderWithTheme(<UtilitiesDemo />);

    expect(screen.getByText('CodeBlock & CopyButton')).toBeInTheDocument();
    expect(screen.getByText('JsonViewer')).toBeInTheDocument();
    expect(screen.getByText('Kbd & VisuallyHidden')).toBeInTheDocument();
    expect(screen.getByText('Indicator & Barcode')).toBeInTheDocument();
    expect(screen.getByText('CronInput')).toBeInTheDocument();
    expect(screen.getByText('DocumentInput')).toBeInTheDocument();
    expect(screen.getByText('PhoneInput')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
    expect(screen.getByText('National')).toBeInTheDocument();
    expect(screen.getByText('Português (pt-BR)')).toBeInTheDocument();
    expect(screen.getByText('AppShell')).toBeInTheDocument();
    expect(screen.getByText('SplitPane')).toBeInTheDocument();
    expect(screen.getByText('Carousel')).toBeInTheDocument();
    expect(screen.getByText('Modal & ImageViewer')).toBeInTheDocument();
    expect(screen.getByText('ErrorBoundary')).toBeInTheDocument();
    expect(screen.getByText('Overlay')).toBeInTheDocument();
    expect(screen.getByText('SortableList')).toBeInTheDocument();
    expect(screen.getByText('SplitButton & SpeedDial')).toBeInTheDocument();
    expect(screen.getByText('Wizard')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open modal' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open image' })).toBeInTheDocument();
  });
});
