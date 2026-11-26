import React from 'react';
import { screen } from '@testing-library/react';
import { DisplayDemo } from './DisplayDemo';
import { renderWithTheme } from '../../../test/render';

describe('DisplayDemo', () => {
  it('renders the display and feedback sections', () => {
    renderWithTheme(<DisplayDemo />);

    expect(screen.getByText('Breadcrumbs & Divider')).toBeInTheDocument();
    expect(screen.getByText('Timeline & Descriptions')).toBeInTheDocument();
    expect(screen.getByText('Scroll area & Spoiler')).toBeInTheDocument();
    expect(screen.getByText('Loading overlay')).toBeInTheDocument();
    expect(screen.getByText('Tree')).toBeInTheDocument();
    expect(screen.getByText('Tree — async loadData')).toBeInTheDocument();
    expect(screen.getByText('Transfer')).toBeInTheDocument();
    expect(screen.getByText('Page header, pagination and skeleton')).toBeInTheDocument();
    expect(screen.getByText('Empty state, table and popconfirm')).toBeInTheDocument();
    expect(screen.getByText('TreeTable')).toBeInTheDocument();
    expect(screen.getByText('Scheduler')).toBeInTheDocument();
    expect(screen.getByText('AvatarGroup')).toBeInTheDocument();
    expect(screen.getByText('Tags')).toBeInTheDocument();
    expect(screen.getByText('Result')).toBeInTheDocument();
    expect(screen.getByText('Chip & ChipGroup')).toBeInTheDocument();
    expect(screen.getByText('ColorSwatch & ThemeIcon')).toBeInTheDocument();
    expect(screen.getByText('KpiCard')).toBeInTheDocument();
    expect(screen.getByText('RingProgress')).toBeInTheDocument();
  });
});
