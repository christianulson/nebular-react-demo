import React from 'react';
import { screen } from '@testing-library/react';
import { ContentKitDemo } from './ContentKitDemo';
import { renderWithTheme } from '../../../test/render';

describe('ContentKitDemo', () => {
  it('renders the content and media sections', () => {
    renderWithTheme(<ContentKitDemo />);

    expect(screen.getByText('Release notes')).toBeInTheDocument();
    expect(screen.getByLabelText('Comment')).toBeInTheDocument();
    expect(screen.getByLabelText('Signature')).toBeInTheDocument();
    expect(screen.getByLabelText('Nebular cropper')).toBeInTheDocument();
    expect(screen.getByLabelText('Avatar editor')).toBeInTheDocument();
    expect(screen.getByLabelText('Project files')).toBeInTheDocument();
    expect(screen.getByLabelText('Company structure')).toBeInTheDocument();
    expect(screen.getByLabelText('Sign in')).toBeInTheDocument();
    expect(screen.getByText('Timepicker')).toBeInTheDocument();
  });
});
