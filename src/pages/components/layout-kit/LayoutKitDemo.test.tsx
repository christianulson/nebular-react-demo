import React from 'react';
import { screen } from '@testing-library/react';
import { LayoutKitDemo } from './LayoutKitDemo';
import { renderWithTheme } from '../../../test/render';

describe('LayoutKitDemo', () => {
  it('renders the layout and utility sections', () => {
    renderWithTheme(<LayoutKitDemo />);

    expect(screen.getByText('Container')).toBeInTheDocument();
    expect(screen.getByText('Flex')).toBeInTheDocument();
    expect(screen.getByText('Stack')).toBeInTheDocument();
    expect(screen.getByText('Grid')).toBeInTheDocument();
    expect(screen.getByText('AspectRatio')).toBeInTheDocument();
    expect(screen.getByText('Affix')).toBeInTheDocument();
    expect(screen.getByText('BackTop')).toBeInTheDocument();
    expect(screen.getByText('Watermark')).toBeInTheDocument();
    expect(screen.getByText('Typography')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create' })).toBeInTheDocument();
  });
});
