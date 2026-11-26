import {
  BulletChart,
  Card,
  ChartContainer,
  ComboChart,
  FunnelChart,
  Gauge,
  Heatmap,
  RadarChart,
  StackedBarChart,
  TreeMapChart,
  WaterfallChart
} from '@nebular-react/core';
import React from 'react';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const funnelData = [
  { label: 'Visitors', value: 12000 },
  { label: 'Sign-ups', value: 4800 },
  { label: 'Activated', value: 2100 },
  { label: 'Paying', value: 720 }
];

const treeMapData = [
  {
    label: 'Platform',
    value: 58,
    children: [
      { label: 'Core', value: 24 },
      { label: 'Charts', value: 18 },
      { label: 'Forms', value: 16 }
    ]
  },
  {
    label: 'Apps',
    value: 42,
    children: [
      { label: 'Site', value: 22 },
      { label: 'Admin', value: 20 }
    ]
  }
];

const waterfallData = [
  { label: 'Revenue', value: 120, type: 'total' as const },
  { label: 'Costs', value: -32, type: 'decrease' as const },
  { label: 'Marketing', value: -18, type: 'decrease' as const },
  { label: 'Expansion', value: 24, type: 'increase' as const },
  { label: 'Profit', value: 94, type: 'total' as const }
];

const bulletData = [
  { label: 'Revenue', value: 82, target: 90, max: 120, ranges: [60, 90, 120] },
  { label: 'NPS', value: 64, target: 70, max: 100, ranges: [40, 70, 100] },
  { label: 'Churn', value: 12, target: 10, max: 30, ranges: [10, 20, 30] }
];

const heatmapData = [
  { x: 'Mon', y: '09h', value: 3 },
  { x: 'Mon', y: '12h', value: 7 },
  { x: 'Mon', y: '18h', value: 5 },
  { x: 'Tue', y: '09h', value: 6 },
  { x: 'Tue', y: '12h', value: 9 },
  { x: 'Tue', y: '18h', value: 4 },
  { x: 'Wed', y: '09h', value: 2 },
  { x: 'Wed', y: '12h', value: 8 },
  { x: 'Wed', y: '18h', value: 6 }
];

export function AdvancedChartsDemo() {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Funnel chart</Card.Header>
          <Card.Body>
            <FunnelChart data={funnelData} ariaLabel="Conversion funnel" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>TreeMap chart</Card.Header>
          <Card.Body>
            <TreeMapChart data={treeMapData} ariaLabel="Package usage" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Waterfall chart</Card.Header>
          <Card.Body>
            <WaterfallChart data={waterfallData} ariaLabel="Profit waterfall" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Bullet chart</Card.Header>
          <Card.Body>
            <BulletChart data={bulletData} ariaLabel="KPIs against targets" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Radar chart</Card.Header>
          <Card.Body>
            <RadarChart
              axes={['Speed', 'Quality', 'A11y', 'DX', 'Bundle']}
              series={[
                { name: 'Current', values: [82, 90, 76, 88, 64] },
                { name: 'Target', values: [90, 95, 90, 90, 80] }
              ]}
              ariaLabel="Quality radar"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Gauge</Card.Header>
          <Card.Body>
            <Gauge
              value={72}
              label="SLA"
              valueFormatter={(value) => `${value}%`}
              ariaLabel="SLA gauge"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Heatmap</Card.Header>
          <Card.Body>
            <Heatmap
              data={heatmapData}
              xLabels={['Mon', 'Tue', 'Wed']}
              yLabels={['09h', '12h', '18h']}
              showValues
              showLegend
              ariaLabel="Activity heatmap"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Combo chart</Card.Header>
          <Card.Body>
            <ComboChart
              labels={labels}
              series={[
                { name: 'Revenue', type: 'bar', data: [12, 19, 14, 25, 22, 30] },
                { name: 'Margin', type: 'line', data: [8, 11, 9, 15, 13, 17] },
                { name: 'Forecast', type: 'area', data: [10, 12, 13, 16, 18, 21] }
              ]}
              ariaLabel="Revenue combo chart"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Stacked bar chart</Card.Header>
          <Card.Body>
            <StackedBarChart
              labels={['Q1', 'Q2', 'Q3', 'Q4']}
              series={[
                { name: 'Direct', data: [32, 48, 41, 60] },
                { name: 'Organic', data: [20, 26, 31, 38] },
                { name: 'Referral', data: [12, 18, 15, 22] }
              ]}
              ariaLabel="Quarterly traffic sources"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <ChartContainer
          title="Exportable chart"
          description="ChartContainer adds a header, loading/empty states and SVG/PNG export."
          exportable
          exportFileName="revenue-chart"
          height={260}
          ariaLabel="Exportable revenue chart"
        >
          <StackedBarChart
            labels={labels}
            series={[
              { name: 'Revenue', data: [12, 19, 14, 25, 22, 30] },
              { name: 'Costs', data: [8, 11, 9, 15, 13, 17] }
            ]}
            ariaLabel="Revenue and costs"
          />
        </ChartContainer>
      </div>
    </div>
  );
}
