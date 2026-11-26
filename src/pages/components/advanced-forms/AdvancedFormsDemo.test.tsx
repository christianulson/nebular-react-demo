import React from 'react';
import { screen } from '@testing-library/react';
import { AdvancedFormsDemo } from './AdvancedFormsDemo';
import { renderWithTheme } from '../../../test/render';

describe('AdvancedFormsDemo', () => {
  it('renders the advanced form sections', () => {
    renderWithTheme(<AdvancedFormsDemo />);

    expect(screen.getByText('Form controls')).toBeInTheDocument();
    expect(screen.getByText('Masks and selections')).toBeInTheDocument();
    expect(screen.getByText('Values and files')).toBeInTheDocument();
    expect(screen.getByText('Fieldset & FormErrorSummary')).toBeInTheDocument();
    expect(screen.getByText('PasswordStrength & NumberFormatter')).toBeInTheDocument();
    expect(screen.getByText('SwitchGroup & ChoiceCardGroup')).toBeInTheDocument();
    expect(screen.getByText('DateField')).toBeInTheDocument();
  });
});
