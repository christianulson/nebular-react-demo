import React from 'react';
import { render } from '@testing-library/react';
import { NebularProvider } from '@nebular-react/styles';
import { LightTheme } from '../themes/light.theme';

export function renderWithTheme(ui: React.ReactElement) {
  return render(<NebularProvider theme={LightTheme}>{ui}</NebularProvider>);
}
