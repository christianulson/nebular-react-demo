import { AvailabilityEditor, Card, RecurrenceEditor, TimeSlotPicker } from '@nebular-react/core';
import type { AvailabilitySchedule, SchedulerRecurrence, TimeSlot } from '@nebular-react/core';
import React, { useState } from 'react';

const slots: readonly TimeSlot[] = [
  { id: 'a', start: '2026-11-30T12:00:00Z', end: '2026-11-30T12:30:00Z' },
  { id: 'b', start: '2026-11-30T13:00:00Z', end: '2026-11-30T13:30:00Z', disabled: true },
  { id: 'c', start: '2026-12-01T18:00:00Z', end: '2026-12-01T18:45:00Z' }
];

const availability: AvailabilitySchedule = {
  timeZone: 'America/Sao_Paulo',
  week: {
    monday: [
      { start: '09:00', end: '12:00' },
      { start: '13:00', end: '18:00' }
    ],
    friday: [{ start: '09:00', end: '16:00' }]
  },
  overrides: [{ date: '2026-12-25', intervals: [] }]
};

export function SchedulingDemo() {
  const [recurrence, setRecurrence] = useState<SchedulerRecurrence | null>({
    frequency: 'weekly',
    count: 4
  });
  const [slot, setSlot] = useState<TimeSlot>();
  const [schedule, setSchedule] = useState(availability);
  const [issues, setIssues] = useState(0);

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>RecurrenceEditor</Card.Header>
          <Card.Body>
            <RecurrenceEditor
              value={recurrence}
              onChange={setRecurrence}
              start={new Date('2027-03-10T15:00:00Z')}
              timeZone="America/New_York"
              locale="en-US"
              labels={{ legend: 'Repeating team meeting' }}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>TimeSlotPicker</Card.Header>
          <Card.Body>
            <TimeSlotPicker
              slots={slots}
              value={slot?.id ?? null}
              onChange={setSlot}
              defaultTimeZone="America/Sao_Paulo"
              timeZones={['UTC', 'America/Sao_Paulo', 'Europe/Lisbon']}
              locale="pt-BR"
            />
            <p className="mt-2 mb-0">{slot ? `Selected slot: ${slot.id}` : 'No slot selected'}</p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>AvailabilityEditor</Card.Header>
          <Card.Body>
            <AvailabilityEditor
              value={schedule}
              onChange={(value, nextIssues) => {
                setSchedule(value);
                setIssues(nextIssues.length);
              }}
              timeZones={['UTC', 'America/Sao_Paulo', 'Europe/Lisbon']}
              locale="pt-BR"
            />
            <p className="mt-2 mb-0">Validation issues: {issues}</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
