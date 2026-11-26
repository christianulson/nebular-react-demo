import React from 'react';
import { screen } from '@testing-library/react';
import { SchedulingDemo } from './SchedulingDemo';
import { renderWithTheme } from '../../../test/render';

describe('SchedulingDemo', () => {
  it('renders the scheduling sections', () => {
    renderWithTheme(<SchedulingDemo />);

    expect(screen.getByText('RecurrenceEditor')).toBeInTheDocument();
    expect(screen.getByText('TimeSlotPicker')).toBeInTheDocument();
    expect(screen.getByText('AvailabilityEditor')).toBeInTheDocument();
  });
});
