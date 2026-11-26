import React from 'react';
import { screen } from '@testing-library/react';
import { MediaDemo } from './MediaDemo';
import { renderWithTheme } from '../../../test/render';

describe('MediaDemo', () => {
  it('renders every media and file section', () => {
    renderWithTheme(<MediaDemo />);

    expect(screen.getByText('MediaPlayer')).toBeInTheDocument();
    expect(screen.getAllByLabelText('Reference video player').length).toBeGreaterThan(0);
    expect(screen.getByText('FilePreview')).toBeInTheDocument();
    expect(screen.getByText('ImageComparison')).toBeInTheDocument();
    expect(screen.getByText('ImageAnnotator')).toBeInTheDocument();
    expect(screen.getByText('LocationPicker')).toBeInTheDocument();
    expect(screen.getByText('TranscriptViewer')).toBeInTheDocument();
    expect(screen.getByText('UploadQueue')).toBeInTheDocument();
    expect(screen.getByText('FileButton')).toBeInTheDocument();
    expect(screen.getByText('Masonry')).toBeInTheDocument();
  });
});
