import React from 'react';
import { screen } from '@testing-library/react';
import { EditorsDemo } from './EditorsDemo';
import { renderWithTheme } from '../../../test/render';

describe('EditorsDemo', () => {
  it('renders every editor section', () => {
    renderWithTheme(<EditorsDemo />);

    expect(screen.getByText('CodeEditor')).toBeInTheDocument();
    expect(screen.getAllByLabelText('TypeScript code editor').length).toBeGreaterThan(0);
    expect(screen.getByText('JsonEditor')).toBeInTheDocument();
    expect(screen.getAllByLabelText('JSON editor').length).toBeGreaterThan(0);
    expect(screen.getByText('MarkdownEditor')).toBeInTheDocument();
    expect(screen.getByText('TemplateEditor')).toBeInTheDocument();
    expect(screen.getByText('EmojiPicker')).toBeInTheDocument();
    expect(screen.getByText('IconPicker')).toBeInTheDocument();
  });
});
