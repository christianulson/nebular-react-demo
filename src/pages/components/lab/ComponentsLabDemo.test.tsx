import React from 'react';
import { screen } from '@testing-library/react';
import { ComponentsLabDemo } from './ComponentsLabDemo';
import { renderWithTheme } from '../../../test/render';

describe('ComponentsLabDemo', () => {
  it('renders the component lab sections', () => {
    renderWithTheme(<ComponentsLabDemo />);

    expect(screen.getByText('Anchor')).toBeInTheDocument();
    expect(screen.getByText('Cascader')).toBeInTheDocument();
    expect(screen.getByText('TreeSelect')).toBeInTheDocument();
    expect(screen.getByText('DashboardGrid')).toBeInTheDocument();
    expect(screen.getByText('FilterBuilder')).toBeInTheDocument();
    expect(screen.getByText('NotificationCenter')).toBeInTheDocument();
    expect(screen.getByText('Kanban')).toBeInTheDocument();
    expect(screen.getByText('Image')).toBeInTheDocument();
    expect(screen.getByText('QRCode')).toBeInTheDocument();
    expect(screen.getByText('MindMap')).toBeInTheDocument();
    expect(screen.getByText('WorkflowDesigner')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Start tour' })).toBeInTheDocument();
  });
});
