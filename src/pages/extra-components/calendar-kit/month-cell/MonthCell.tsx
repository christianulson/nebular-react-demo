import {
  CalendarDayPicker,
  CalendarPickerContext,
  useCalendarPickerContext
} from '@nebular-react/core';
import { useDateFns } from '@nebular-react/hooks';
import { Moment } from 'moment';
import React from 'react';

interface MonthCellProps<TDate extends Date | Moment = Date> {
  date?: TDate;
}

export function MonthCell<TDate extends Date | Moment = Date>(props: MonthCellProps<TDate>) {
  const { date } = props;
  const { locale, selectedValue, onDateChange, dateType } = useCalendarPickerContext<TDate>();
  const dateFns = useDateFns<TDate>(locale);

  const getTitle = (): string => dateFns.getMonthName(date, 'long');

  return (
    <div style={{ padding: '1rem' }}>
      <h4>{getTitle()}</h4>
      <CalendarPickerContext.Provider
        value={{ locale, selectedValue, visibleDate: date, onDateChange, dateType }}
      >
        <CalendarDayPicker<TDate> boundingMonths={false} />
      </CalendarPickerContext.Provider>
    </div>
  );
}
