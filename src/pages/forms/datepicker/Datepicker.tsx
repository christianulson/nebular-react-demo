import {
  Card,
  DateAdapterProvider,
  Datepicker,
  DateTimeRangePicker,
  DatetimePicker,
  nativeDateAdapter,
  MonthPicker,
  MonthRangePicker,
  QuarterPicker,
  Rangepicker,
  TimeRangePicker,
  TimeZonePicker,
  WeekPicker,
  YearPicker,
  YearRangePicker
} from '@nebular-react/core';
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

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Datepicker Presets</Card.Header>
          <Card.Body>
            <Datepicker placeholder="With presets" presets />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Disabled Dates</Card.Header>
          <Card.Body>
            <Datepicker
              placeholder="Sundays disabled"
              disabledDates={(date: Date) => date.getDay() === 0}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Rangepicker Presets</Card.Header>
          <Card.Body>
            <Rangepicker placeholder="Range with presets" presets />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Native Date Adapter</Card.Header>
          <Card.Body>
            <DateAdapterProvider adapter={nativeDateAdapter}>
              <Datepicker placeholder="Native Date values" />
            </DateAdapterProvider>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>DateTimeRangePicker</Card.Header>
          <Card.Body>
            <DateTimeRangePicker
              defaultValue={{
                start: new Date(2026, 10, 1, 9, 0),
                end: new Date(2026, 10, 5, 18, 0)
              }}
              locale="en-US"
              ariaLabel="Deployment window"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>MonthPicker</Card.Header>
          <Card.Body>
            <MonthPicker<Date>
              label="Month"
              description="Pick a month"
              format="MMMM YYYY"
              defaultValue={new Date(2026, 10, 15)}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>MonthRangePicker</Card.Header>
          <Card.Body>
            <MonthRangePicker
              label="Period"
              description="Pick a start and an end month"
              defaultValue={{ start: new Date(2026, 0, 1), end: new Date(2026, 5, 1) }}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>QuarterPicker</Card.Header>
          <Card.Body>
            <QuarterPicker
              label="Quarter"
              description="Pick a fiscal quarter"
              defaultValue={{ year: 2026, quarter: 2 }}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>TimeRangePicker</Card.Header>
          <Card.Body>
            <TimeRangePicker
              label="Shift"
              description="Pick the start and end of the shift"
              defaultValue={{
                start: new Date(2026, 10, 1, 9, 0),
                end: new Date(2026, 10, 1, 17, 0)
              }}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>WeekPicker</Card.Header>
          <Card.Body>
            <WeekPicker
              label="Week"
              description="Select any day to pick its ISO week"
              defaultValue={{
                start: new Date(2026, 10, 16),
                end: new Date(2026, 10, 22, 23, 59, 59, 999),
                weekNumber: 47,
                year: 2026
              }}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>YearPicker</Card.Header>
          <Card.Body>
            <YearPicker<Date>
              label="Year"
              description="Pick a year"
              defaultValue={new Date(2026, 5, 15)}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>YearRangePicker</Card.Header>
          <Card.Body>
            <YearRangePicker
              label="Period"
              description="Pick a start and an end year"
              defaultValue={{ start: 2022, end: 2026 }}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>TimeZonePicker</Card.Header>
          <Card.Body>
            <TimeZonePicker
              label="Time zone"
              description="Search and pick an IANA time zone"
              defaultValue="Europe/Lisbon"
              searchable
              clearable
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
