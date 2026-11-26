import React from 'react';
import { screen } from '@testing-library/react';
import { SelectDemo } from './SelectDemo';
import { renderWithTheme } from '../../../test/render';

describe('SelectDemo', () => {
  it('renders the select and autocomplete sections', () => {
    renderWithTheme(<SelectDemo />);

    expect(screen.getByText('Searchable + clearable')).toBeInTheDocument();
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(screen.getByText('Multiple + search')).toBeInTheDocument();
    expect(screen.getByText('Virtualized (1.000 options)')).toBeInTheDocument();
    expect(screen.getByText('Autocomplete')).toBeInTheDocument();
    expect(screen.getByText('Combobox')).toBeInTheDocument();
    expect(screen.getByText('NativeSelect')).toBeInTheDocument();
    expect(screen.getByText('MultiSelect')).toBeInTheDocument();
    expect(screen.getByText('Select — renderOption')).toBeInTheDocument();
    expect(
      screen.getByText('MultiSelect — groups, virtualized and renderOption')
    ).toBeInTheDocument();
    expect(screen.getByText('MultiSelect — async search')).toBeInTheDocument();
    expect(screen.getByText('TreeSelect — checkable cascade')).toBeInTheDocument();
    expect(screen.getByText('TreeSelect — async loadData')).toBeInTheDocument();
    expect(screen.getByText('Cascader — searchable + async loadData')).toBeInTheDocument();
  });
});
