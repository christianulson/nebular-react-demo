import React from 'react';
import { screen } from '@testing-library/react';
import { FormBuildersDemo } from './FormBuildersDemo';
import { renderWithTheme } from '../../../test/render';

describe('FormBuildersDemo', () => {
  it('renders every form builder section', () => {
    renderWithTheme(<FormBuildersDemo />);

    expect(screen.getByText('SchemaForm')).toBeInTheDocument();
    expect(screen.getByText('FormDesigner')).toBeInTheDocument();
    expect(screen.getByText('PropertyGrid')).toBeInTheDocument();
    expect(screen.getByText('DataMappingEditor')).toBeInTheDocument();
    expect(screen.getByText('DecisionTableEditor')).toBeInTheDocument();
    expect(screen.getByText('MatrixField')).toBeInTheDocument();
    expect(screen.getByText('RepeatableFieldset')).toBeInTheDocument();
    expect(screen.getByText('ImportPreview')).toBeInTheDocument();
  });
});
