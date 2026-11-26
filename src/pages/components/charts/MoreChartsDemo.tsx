import {
  BoxPlotChart,
  BubbleChart,
  CalendarHeatmap,
  CandlestickChart,
  Card,
  ChartDataTable,
  ChordChart,
  Dendrogram,
  HexbinChart,
  MekkoChart,
  NetworkGraph,
  ParallelCoordinates,
  PictogramChart,
  PolarAreaChart,
  RadialBarChart,
  SankeyChart,
  StepLineChart,
  StreamGraphChart,
  SunburstChart,
  ViolinPlot,
  WaffleChart,
  WordCloud
} from '@nebular-react/core';
import type { CalendarHeatmapDatum, DendrogramNode } from '@nebular-react/core';
import React from 'react';

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="col-md-12 col-lg-6">
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>{children}</Card.Body>
      </Card>
    </div>
  );
}

const boxPlotData = [
  { label: 'Mon', min: 12, q1: 18, median: 24, q3: 31, max: 38 },
  { label: 'Tue', min: 10, q1: 16, median: 22, q3: 29, max: 44, outliers: [52, 58] },
  { label: 'Wed', min: 14, q1: 20, median: 27, q3: 33, max: 41 },
  { label: 'Thu', min: 8, q1: 15, median: 21, q3: 28, max: 36, outliers: [4] },
  { label: 'Fri', min: 16, q1: 22, median: 29, q3: 35, max: 47 }
];

const bubbleData = [
  { x: 12, y: 34, size: 240, label: 'Chrome' },
  { x: 28, y: 18, size: 90, label: 'Safari' },
  { x: 46, y: 52, size: 380, label: 'Edge' },
  { x: 64, y: 26, size: 140, label: 'Firefox' },
  { x: 78, y: 44, size: 60, label: 'Opera' }
];

const candleData = [
  { label: 'Mon', open: 100, high: 110, low: 90, close: 105, volume: 1200 },
  { label: 'Tue', open: 105, high: 115, low: 95, close: 98, volume: 900 },
  { label: 'Wed', open: 98, high: 108, low: 92, close: 98, volume: 1500 },
  { label: 'Thu', open: 98, high: 112, low: 96, close: 110, volume: 1800 },
  { label: 'Fri', open: 110, high: 118, low: 104, close: 106, volume: 1100 }
];

const calendarData: CalendarHeatmapDatum[] = Array.from({ length: 120 }, (_item, index) => {
  const date = new Date(2026, 7, 1);
  date.setDate(date.getDate() + index);

  return {
    date: date.toISOString().slice(0, 10),
    value: (index * 7 + 3) % 13
  };
});

const chordLabels = ['Direct', 'Organic', 'Referral', 'Social'];
const chordMatrix = [
  [0, 12, 6, 4],
  [12, 0, 8, 3],
  [6, 8, 0, 5],
  [4, 3, 5, 0]
];

const tree: DendrogramNode = {
  id: 'all',
  label: 'All samples',
  distance: 12,
  children: [
    {
      id: 'group-a',
      label: 'Group A',
      distance: 7,
      children: [
        {
          id: 'a-1',
          label: 'A1',
          distance: 3,
          children: [
            { id: 'a-1-1', label: 'A1a' },
            { id: 'a-1-2', label: 'A1b' }
          ]
        },
        { id: 'a-2', label: 'A2', distance: 2, children: [{ id: 'a-2-1', label: 'A2a' }] }
      ]
    },
    {
      id: 'group-b',
      label: 'Group B',
      distance: 9,
      children: [
        { id: 'b-1', label: 'B1', distance: 4, children: [{ id: 'b-1-1', label: 'B1a' }] },
        { id: 'b-2', label: 'B2', distance: 5 }
      ]
    }
  ]
};

const hexbinData = [
  { cx: 12, cy: 20, count: 42 },
  { cx: 38, cy: 46, count: 28 },
  { cx: 62, cy: 26, count: 54 },
  { cx: 80, cy: 70, count: 18 }
].flatMap((cluster) =>
  Array.from({ length: cluster.count }, (_item, index) => {
    const angle = (index / cluster.count) * Math.PI * 2;
    const spread = 1 + (index % 5) * 0.9;

    return {
      x: cluster.cx + Math.cos(angle) * spread,
      y: cluster.cy + Math.sin(angle) * spread
    };
  })
);

const mekkoData = [
  {
    label: 'Q1',
    segments: [
      { label: 'Direct', value: 32 },
      { label: 'Search', value: 24 },
      { label: 'Social', value: 12 }
    ]
  },
  {
    label: 'Q2',
    segments: [
      { label: 'Direct', value: 28 },
      { label: 'Search', value: 30 },
      { label: 'Social', value: 18 }
    ]
  },
  {
    label: 'Q3',
    segments: [
      { label: 'Direct', value: 20 },
      { label: 'Search', value: 34 },
      { label: 'Social', value: 22 }
    ]
  }
];

const graphNodes = [
  { id: 'api', label: 'API', group: 'backend' },
  { id: 'web', label: 'Web', group: 'frontend' },
  { id: 'worker', label: 'Worker', group: 'backend' },
  { id: 'cache', label: 'Cache', group: 'data' },
  { id: 'db', label: 'Database', group: 'data' }
];

const graphEdges = [
  { source: 'web', target: 'api', label: 'HTTPS' },
  { source: 'api', target: 'worker', weight: 2 },
  { source: 'api', target: 'cache', label: 'read' },
  { source: 'worker', target: 'db' },
  { source: 'cache', target: 'db', label: 'miss' }
];

const parallelDimensions = [
  { key: 'price', label: 'Price' },
  { key: 'range', label: 'Range' },
  { key: 'comfort', label: 'Comfort' },
  { key: 'safety', label: 'Safety' }
];

const parallelSeries = [
  { name: 'Model S', values: { price: 90, range: 95, comfort: 88, safety: 92 } },
  { name: 'Model 3', values: { price: 55, range: 70, comfort: 74, safety: 86 } },
  { name: 'Leaf', values: { price: 35, range: 45, comfort: 60, safety: 70 }, color: '#00d68f' }
];

const trafficSources = [
  { label: 'Direct', value: 44, color: '#3366ff' },
  { label: 'Organic', value: 31, color: '#00d68f' },
  { label: 'Referral', value: 15, color: '#ffaa00' },
  { label: 'Social', value: 10, color: '#ff3d71' }
];

const radialData = [
  { label: 'Alpha', value: 82, color: '#3366ff' },
  { label: 'Beta', value: 64, color: '#00d68f' },
  { label: 'Gamma', value: 47, color: '#ffaa00' },
  { label: 'Delta', value: 25, color: '#ff3d71' }
];

const sankeyNodes = [
  { id: 'coal', label: 'Coal' },
  { id: 'gas', label: 'Gas' },
  { id: 'solar', label: 'Solar', color: '#ffaa00' },
  { id: 'power', label: 'Power' },
  { id: 'heat', label: 'Heat' },
  { id: 'homes', label: 'Homes' }
];

const sankeyLinks = [
  { source: 'coal', target: 'power', value: 40 },
  { source: 'gas', target: 'power', value: 25 },
  { source: 'gas', target: 'heat', value: 15 },
  { source: 'solar', target: 'power', value: 20 },
  { source: 'power', target: 'homes', value: 70 },
  { source: 'heat', target: 'homes', value: 15 }
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const stepSeries = [
  { name: 'Revenue', data: [2, 5, 3, 6, 4] },
  { name: 'Costs', data: [1, 2, 4, 3, 5], color: '#ff3d71' }
];

const streamLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
const streamSeries = [
  { name: 'Direct', data: [10, 20, 14, 26] },
  { name: 'Organic', data: [30, 10, 22, 18] },
  { name: 'Referral', data: [12, 18, 9, 15] }
];

const sunburstData = [
  {
    label: 'Electronics',
    children: [
      { label: 'Phones', value: 320 },
      { label: 'Laptops', value: 210 },
      { label: 'Audio', value: 90 }
    ]
  },
  {
    label: 'Fashion',
    color: '#00d68f',
    children: [
      { label: 'Shoes', value: 160 },
      { label: 'Bags', value: 120 }
    ]
  },
  {
    label: 'Home',
    children: [
      { label: 'Kitchen', value: 140 },
      { label: 'Decor', value: 80 }
    ]
  }
];

const violinData = [
  { label: 'API', values: [42, 45, 47, 49, 50, 52, 55, 58, 64, 78] },
  { label: 'Database', values: [18, 20, 22, 24, 25, 27, 30, 36, 45, 62], color: '#00d68f' },
  { label: 'Cache', values: [2, 3, 3, 4, 4, 5, 5, 6, 8, 14], color: '#ffaa00' }
];

const words = [
  { text: 'React', value: 100 },
  { text: 'TypeScript', value: 80 },
  { text: 'Emotion', value: 60 },
  { text: 'Nebular', value: 40 },
  { text: 'Charts', value: 20 },
  { text: 'Testing', value: 10 }
];

export function MoreChartsDemo() {
  return (
    <div className="row">
      <ChartCard title="BoxPlotChart">
        <BoxPlotChart data={boxPlotData} ariaLabel="Latency by weekday" />
      </ChartCard>

      <ChartCard title="BubbleChart">
        <BubbleChart
          data={bubbleData}
          xLabel="Average session (min)"
          yLabel="Conversion rate (%)"
          ariaLabel="Sessions against conversion"
        />
      </ChartCard>

      <ChartCard title="CandlestickChart">
        <CandlestickChart data={candleData} showVolume ariaLabel="Daily share prices" />
      </ChartCard>

      <ChartCard title="CalendarHeatmap">
        <CalendarHeatmap data={calendarData} ariaLabel="Daily activity" />
      </ChartCard>

      <ChartCard title="ChordChart">
        <ChordChart matrix={chordMatrix} labels={chordLabels} ariaLabel="Traffic overlap" />
      </ChartCard>

      <ChartCard title="Dendrogram">
        <Dendrogram data={tree} ariaLabel="Hierarchical clustering of samples" />
      </ChartCard>

      <ChartCard title="HexbinChart">
        <HexbinChart data={hexbinData} ariaLabel="Customer density" />
      </ChartCard>

      <ChartCard title="MekkoChart">
        <MekkoChart data={mekkoData} ariaLabel="Channel mix by quarter" />
      </ChartCard>

      <ChartCard title="NetworkGraph">
        <NetworkGraph nodes={graphNodes} edges={graphEdges} ariaLabel="Service topology" />
      </ChartCard>

      <ChartCard title="ParallelCoordinates">
        <ParallelCoordinates
          dimensions={parallelDimensions}
          series={parallelSeries}
          ariaLabel="Electric car comparison"
        />
      </ChartCard>

      <ChartCard title="PictogramChart">
        <PictogramChart data={trafficSources} ariaLabel="Traffic sources" />
      </ChartCard>

      <ChartCard title="PolarAreaChart">
        <PolarAreaChart data={trafficSources} ariaLabel="Sessions by channel" />
      </ChartCard>

      <ChartCard title="RadialBarChart">
        <RadialBarChart data={radialData} ariaLabel="Team coverage" />
      </ChartCard>

      <ChartCard title="SankeyChart">
        <SankeyChart nodes={sankeyNodes} links={sankeyLinks} ariaLabel="Energy flow" />
      </ChartCard>

      <ChartCard title="StepLineChart">
        <StepLineChart labels={months} series={stepSeries} ariaLabel="Monthly figures" />
      </ChartCard>

      <ChartCard title="StreamGraphChart">
        <StreamGraphChart labels={streamLabels} series={streamSeries} ariaLabel="Traffic sources" />
      </ChartCard>

      <ChartCard title="SunburstChart">
        <SunburstChart data={sunburstData} ariaLabel="Sales by category" />
      </ChartCard>

      <ChartCard title="ViolinPlot">
        <ViolinPlot data={violinData} ariaLabel="Latency distribution by service" />
      </ChartCard>

      <ChartCard title="WaffleChart">
        <WaffleChart data={trafficSources} ariaLabel="Traffic sources on a grid" />
      </ChartCard>

      <ChartCard title="WordCloud">
        <WordCloud words={words} ariaLabel="Technology usage" />
      </ChartCard>

      <div className="col-12">
        <Card>
          <Card.Header>ChartDataTable</Card.Header>
          <Card.Body>
            <ChartDataTable
              caption="Monthly revenue and costs"
              columns={['Month', 'Revenue', 'Costs']}
              rows={months.map((month, index) => [
                month,
                stepSeries[0].data[index],
                stepSeries[1].data[index]
              ])}
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
