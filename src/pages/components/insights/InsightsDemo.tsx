import {
  Button,
  Card,
  ChatSources,
  ConflictResolutionDialog,
  KpiCard,
  LogViewer,
  TraceWaterfall
} from '@nebular-react/core';
import type {
  ConflictResolutionChoices,
  ConflictResolutionField,
  ConflictResolutionResult,
  LogViewerEntry,
  TraceWaterfallSpan
} from '@nebular-react/core';
import React, { useState } from 'react';

const logEntries: LogViewerEntry[] = Array.from({ length: 240 }, (_item, index) => ({
  id: index,
  timestamp: new Date(Date.UTC(2026, 10, 24, 14, 0, index)).toISOString().slice(11, 19),
  level: index % 9 === 0 ? 'WARN' : 'INFO',
  message:
    index % 9 === 0
      ? `Job ${index + 1} took longer than expected. Retrying after a transient timeout.`
      : `Job ${index + 1} completed.`
}));

const spans: readonly TraceWaterfallSpan[] = [
  {
    id: 'request',
    name: 'GET /orders',
    service: 'gateway',
    startTime: 0,
    duration: 245,
    status: 'ok',
    attributes: { 'http.status_code': 200 }
  },
  {
    id: 'cache',
    parentId: 'request',
    name: 'Look up cached response',
    service: 'cache',
    startTime: 12,
    duration: 33,
    status: 'error',
    attributes: { 'cache.result': 'timeout' }
  },
  {
    id: 'orders',
    parentId: 'request',
    name: 'Fetch order summaries',
    service: 'orders',
    startTime: 47,
    duration: 182,
    status: 'ok'
  },
  {
    id: 'query',
    parentId: 'orders',
    name: 'SELECT orders',
    service: 'database',
    startTime: 60,
    duration: 120,
    status: 'ok'
  }
];

const conflictFields: readonly ConflictResolutionField<string>[] = [
  {
    id: 'title',
    label: 'Document title',
    localValue: 'Planning notes',
    savedValue: 'Project plan'
  },
  {
    id: 'description',
    label: 'Description',
    localValue: 'Draft the schedule.\nShare the first version on Monday.',
    savedValue: 'Draft the schedule.\nShare the first version on Thursday.',
    showTextDiff: true
  }
];

export function InsightsDemo() {
  const [conflictOpen, setConflictOpen] = useState(false);
  const [choices, setChoices] = useState<ConflictResolutionChoices>({});
  const [resolved, setResolved] = useState<ConflictResolutionResult<string>[]>([]);

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>KpiCard</Card.Header>
          <Card.Body>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <KpiCard
                label="Monthly revenue"
                value="$ 128,400"
                hint="Compared with last month"
                trend={{ value: '+12.4%', direction: 'up' }}
                status="success"
              />
              <KpiCard
                label="Open tickets"
                value="37"
                hint="8 waiting for a first response"
                trend={{ value: '-4.1%', direction: 'down' }}
                status="warning"
              />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>LogViewer</Card.Header>
          <Card.Body>
            <LogViewer entries={logEntries} defaultFollowing={false} height={280} />
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>TraceWaterfall</Card.Header>
          <Card.Body>
            <TraceWaterfall spans={spans} />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>ChatSources</Card.Header>
          <Card.Body>
            <ChatSources
              items={[
                {
                  id: 'provider',
                  title: 'Getting started',
                  href: 'https://hirol888.github.io/nebular-react/',
                  excerpt: 'Set up the theme provider at the root of the React tree.'
                },
                {
                  id: 'styles',
                  title: 'Theme sources',
                  href: 'https://github.com/hirol888/nebular-react/tree/develop/src/nebular-react-styles'
                }
              ]}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>ConflictResolutionDialog</Card.Header>
          <Card.Body>
            <Button onClick={() => setConflictOpen(true)}>Compare document versions</Button>
            <p className="mt-2 mb-0">
              {resolved.length
                ? `Resolved ${resolved.length} field(s).`
                : 'No conflicts resolved yet.'}
            </p>
            <ConflictResolutionDialog
              opened={conflictOpen}
              fields={conflictFields}
              choices={choices}
              onChoiceChange={(id, choice) =>
                setChoices((current) => ({ ...current, [id]: choice }))
              }
              onResolve={(results) => {
                setResolved(results);
                setConflictOpen(false);
              }}
              onClose={() => setConflictOpen(false)}
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
