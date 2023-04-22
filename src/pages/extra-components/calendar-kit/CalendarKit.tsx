import { CalendarMonthPicker, CalendarPickerContext, Card } from '@nebular-react/core';
import { DEFAULT_LOCALE } from '@nebular-react/hooks';
import moment, { Moment } from 'moment';
import React, { useState } from 'react';
import { MonthCell } from './month-cell/MonthCell';
import useStyles from './CalendarKit.styles';

export function CalendarKitDemo() {
  const month = moment();
  const [selectedValue, setSelectedValue] = useState<Moment>(month);
  const { classes, cx } = useStyles();

  const handleDateChange = (date: Moment) => {
    setSelectedValue(date);
  };

  return (
    <Card className={cx(classes.root)}>
      <Card.Header>
        <p>
          <code>CalendarKit</code> is a module that contains multiple useful components for building
          custom calendars. So if you think our calendars is not enough powerful for you just use
          calendar-kit and build your own calendar!
        </p>
      </Card.Header>
      <Card.Body>
        <CalendarPickerContext.Provider
          value={{
            locale: DEFAULT_LOCALE,
            selectedValue,
            visibleDate: month,
            onDateChange: handleDateChange,
            monthCellComponent: MonthCell,
            dateType: 'moment'
          }}
        >
          <CalendarMonthPicker<Moment> month={month} />
        </CalendarPickerContext.Provider>
      </Card.Body>
    </Card>
  );
}
