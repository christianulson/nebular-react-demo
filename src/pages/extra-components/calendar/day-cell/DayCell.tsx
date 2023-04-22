import React from 'react';
import { Moment } from 'moment';
import { BaseCalendarCellProps } from '@nebular-react/core/lib/Calendar/calendar-kit/types';
import { useDateFns } from '@nebular-react/hooks';
import { createCalendarDayCellStyles, useCalendarPickerContext } from '@nebular-react/core';

export function DayCell<TDate extends Date | Moment>(props: BaseCalendarCellProps<TDate>) {
  const { date, onSelect } = props;
  const { locale, selectedValue, visibleDate, min, max, size, filter } =
    useCalendarPickerContext<TDate>();
  const dateFns = useDateFns<TDate>(locale);
  const day = date && dateFns.getDate(date);
  const { classes, cx } = createCalendarDayCellStyles({ size });

  const smallerThanMin = (): boolean => !!(date && min && dateFns.compareDates(date, min) < 0);

  const greaterThanMax = (): boolean => !!(date && max && dateFns.compareDates(date, max) > 0);

  const dontFitFilter = (): boolean => !!(date && filter && !filter(date));

  const isDisabled = (): boolean => smallerThanMin() || greaterThanMax() || dontFitFilter();

  const handleClick = () => {
    if (isDisabled() || !date) {
      return;
    }

    onSelect && onSelect(date);
  };

  return (
    <div
      className={cx(classes.root, size, 'day-cell', {
        today: dateFns.isSameDay(date, dateFns.today()),
        'bounding-month': !dateFns.isSameMonth(date, visibleDate),
        selected: dateFns.isSameDay(date, selectedValue as TDate),
        empty: !date,
        disabled: isDisabled()
      })}
      onClick={handleClick}
    >
      <div className="cell-content" style={{ flexDirection: 'column' }}>
        <div>{day}</div>
        <span
          className={cx('caption', {
            'text-control': dateFns.isSameDay(date, selectedValue as TDate)
          })}
        >
          {(day! + 100) * day!}$
        </span>
      </div>
    </div>
  );
}
