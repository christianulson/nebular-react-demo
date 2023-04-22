import { Calendar, CalendarRange, DateRange } from '@nebular-react/core';
import { useDateFns } from '@nebular-react/hooks';
import React, { useState } from 'react';
import { DayCell } from './day-cell/DayCell';
import useStyles from './Calendar.styles';

export function CalendarDemo() {
  const [date, setDate] = useState<Date>();
  const [range, setRange] = useState<DateRange<Date>>();
  const [date2, setDate2] = useState<Date>();
  const { classes, cx } = useStyles();

  const { format } = useDateFns<Date>();

  return (
    <div className={cx(classes.root)}>
      <div className="calendar-container">
        <span className="subtitle">Selected date: {format(date, 'MMM D, YYYY')}</span>
        <Calendar
          date={date}
          boundingMonth
          showWeekNumber
          onDateChange={(value) => setDate(value)}
        />
      </div>

      <div className="calendar-container">
        <span className="subtitle">
          Selected range: {format(range?.start, 'MMM D, YYYY')} -{' '}
          {format(range?.end, 'MMM D, YYYY')}
        </span>
        <CalendarRange range={range} onRangeChange={(value) => setRange(value)} />
      </div>

      <div className="calendar-container">
        <span className="subtitle">Selected date: {format(date2, 'MMM D, YYYY')}</span>
        <Calendar<Date>
          date={date2}
          dayCellComponent={DayCell}
          onDateChange={(value) => setDate2(value)}
        />
      </div>
    </div>
  );
}
