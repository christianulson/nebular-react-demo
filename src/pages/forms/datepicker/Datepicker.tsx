import { Card, Datepicker, DatetimePicker, Rangepicker } from '@nebular-react/core';
import { useDateFns } from '@nebular-react/hooks';
import React from 'react';
import useStyles from './Datepicker.styles';

export function DatepickerDemo() {
  const { classes, cx } = useStyles();
  const { today, addDays } = useDateFns<Date>();
  const min = addDays(today('native'), -5);
  const max = addDays(today('native'), 5);
  const filterFn = (_date: Date) => _date.getDay() === 0;

  return (
    <div className={cx(classes.root, 'row')}>
      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Common Datepicker</Card.Header>
          <Card.Body>
            <Datepicker placeholder="Pick Date" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Datepicker With Range</Card.Header>
          <Card.Body>
            <Rangepicker placeholder="Range Picker" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Datepicker With Disabled Min Max Values</Card.Header>
          <Card.Body>
            <Datepicker placeholder="Min Max Picker" min={min} max={max} />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Datepicker With Filter</Card.Header>
          <Card.Body>
            <Datepicker<Date> placeholder="With Filter" filter={filterFn} />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Datepicker With Time</Card.Header>
          <Card.Body>
            <DatetimePicker placeholder="With Time" timeListProps={{ withSeconds: true }} />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Datepicker With Time (Single Column)</Card.Header>
          <Card.Body>
            <DatetimePicker
              placeholder="With Time"
              timeListProps={{ singleColumn: true, step: 10 }}
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
