import {
  Card,
  DiffViewer,
  GanttChart,
  InfiniteScroll,
  PivotTable,
  VirtualList
} from '@nebular-react/core';
import React, { useState } from 'react';

interface SalesRow {
  [key: string]: unknown;
  region: string;
  quarter: string;
  revenue: number;
}

const pivotData: SalesRow[] = [
  { region: 'North', quarter: 'Q1', revenue: 120 },
  { region: 'North', quarter: 'Q2', revenue: 150 },
  { region: 'North', quarter: 'Q3', revenue: 170 },
  { region: 'North', quarter: 'Q4', revenue: 190 },
  { region: 'South', quarter: 'Q1', revenue: 90 },
  { region: 'South', quarter: 'Q2', revenue: 110 },
  { region: 'South', quarter: 'Q3', revenue: 130 },
  { region: 'South', quarter: 'Q4', revenue: 160 }
];

const ganttTasks = [
  {
    id: 'design',
    name: 'Design',
    start: '2026-11-02',
    end: '2026-11-06',
    progress: 100
  },
  {
    id: 'core',
    name: 'Core implementation',
    start: '2026-11-04',
    end: '2026-11-13',
    progress: 70,
    dependencies: ['design']
  },
  {
    id: 'tests',
    name: 'Tests and docs',
    start: '2026-11-10',
    end: '2026-11-18',
    progress: 40,
    dependencies: ['core']
  },
  {
    id: 'release',
    name: 'Release',
    start: '2026-11-18',
    end: '2026-11-20',
    progress: 0,
    dependencies: ['tests']
  }
];

const virtualItems = Array.from({ length: 1000 }, (_, index) => `Row ${index + 1}`);

const before = ['function greet(name) {', "  return 'Hello ' + name;", '}'].join('\n');

// eslint-disable-next-line no-template-curly-in-string
const after = ['function greet(name: string) {', '  return `Hello ${name}`;', '}'].join('\n');

const initialItems = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

export function DataViewsDemo() {
  const [items, setItems] = useState(initialItems);

  const loadMore = () => {
    setItems((current) => [
      ...current,
      ...Array.from({ length: 10 }, (_, index) => `Item ${current.length + index + 1}`)
    ]);
  };

  return (
    <div className="row">
      <div className="col-12">
        <Card>
          <Card.Header>GanttChart</Card.Header>
          <Card.Body>
            <GanttChart tasks={ganttTasks} view="week" maxHeight={320} ariaLabel="Release plan" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>PivotTable</Card.Header>
          <Card.Body>
            <PivotTable<SalesRow>
              data={pivotData}
              rows={['region']}
              column="quarter"
              measures={[
                {
                  key: 'revenue',
                  label: 'Revenue',
                  aggregate: 'sum',
                  value: (row) => row.revenue
                }
              ]}
              showRowTotals
              showColumnTotals
              showGrandTotal
              ariaLabel="Revenue pivot table"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>DiffViewer</Card.Header>
          <Card.Body>
            <DiffViewer before={before} after={after} mode="split" ariaLabel="Code diff" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>VirtualList (1.000 rows)</Card.Header>
          <Card.Body>
            <VirtualList
              items={virtualItems}
              height={240}
              itemHeight={32}
              ariaLabel="Virtualized rows"
              renderItem={(item) => (
                <div style={{ padding: '0.4rem 0.75rem', borderBottom: '1px solid #edf1f7' }}>
                  {item}
                </div>
              )}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>InfiniteScroll</Card.Header>
          <Card.Body>
            <InfiniteScroll
              loadMore={loadMore}
              hasMore={items.length < 50}
              endMessage="All items loaded"
              ariaLabel="Infinite items"
            >
              {items.map((item, index) => (
                <article
                  key={item}
                  aria-posinset={index + 1}
                  aria-setsize={items.length}
                  style={{ padding: '0.2rem 0' }}
                >
                  {item}
                </article>
              ))}
            </InfiniteScroll>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
