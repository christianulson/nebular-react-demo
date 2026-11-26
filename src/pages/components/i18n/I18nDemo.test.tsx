import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { renderWithTheme } from '../../../test/render';
import { I18nDemo } from './I18nDemo';

describe('I18nDemo', () => {
  it('switches the global locale and localizes component labels', () => {
    renderWithTheme(<I18nDemo />);

    expect(screen.getByText('Global locale & messages')).toBeInTheDocument();
    expect(screen.getByText('Message overrides & RTL')).toBeInTheDocument();
    expect(screen.getByText('NumberFormatter & Pagination')).toBeInTheDocument();
    expect(screen.getByText('Calendar')).toBeInTheDocument();
    expect(screen.getByText('CronInput presets')).toBeInTheDocument();
    expect(screen.getByText('Transfer labels')).toBeInTheDocument();
    expect(screen.getByText('DataGrid localized + labels override')).toBeInTheDocument();
    expect(screen.getByTestId('rtl-summary')).toHaveAttribute('dir', 'rtl');
    expect(screen.getByTestId('rtl-summary')).toHaveTextContent('Hoje (override)');

    expect(screen.getByTestId('locale-today')).toHaveTextContent('Today');
    expect(screen.getByTestId('locale-undo')).toHaveTextContent('Undo');

    fireEvent.click(screen.getByText('Português (pt-BR)'));

    expect(screen.getByTestId('locale-today')).toHaveTextContent('Hoje');
    expect(screen.getByTestId('locale-page')).toHaveTextContent('Página 3');
    expect(screen.getByTestId('locale-undo')).toHaveTextContent('Desfazer');
  });
});
