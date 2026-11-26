import {
  AreaChart,
  BarChart,
  Card,
  DonutChart,
  LineChart,
  PieChart,
  ScatterChart,
  Sparkline
} from '@nebular-react/core';
import React, { useState } from 'react';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const series = [
  { name: 'Revenue', data: [12, 19, 14, 25, 22, 30] },
  { name: 'Costs', data: [8, 11, 9, 15, 13, 17] }
];

export function NebularChartsDemo() {
  const [zoom, setZoom] = useState('full');

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Line chart</Card.Header>
          <Card.Body>
            <LineChart labels={labels} series={series} ariaLabel="Revenue and costs by month" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Interactive legend & zoom</Card.Header>
          <Card.Body>
            <LineChart
              labels={labels}
              series={series}
              interactiveLegend
              zoomable
              onZoomChange={(range) =>
                setZoom(range ? `${range.startIndex}–${range.endIndex}` : 'full')
              }
              ariaLabel="Interactive revenue and costs"
            />
            <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>
              Zoom: <strong>{zoom}</strong>
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Area chart</Card.Header>
          <Card.Body>
            <AreaChart
              labels={labels}
              series={series}
              interactiveLegend
              ariaLabel="Revenue and costs area chart"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Bar chart</Card.Header>
          <Card.Body>
            <BarChart
              labels={['Q1', 'Q2', 'Q3', 'Q4']}
              series={[{ name: 'Revenue', data: [32, 48, 41, 60] }]}
              interactiveLegend
              ariaLabel="Quarterly revenue"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Donut chart</Card.Header>
          <Card.Body>
            <DonutChart
              data={[
                { label: 'Direct', value: 60 },
                { label: 'Organic', value: 40 }
              ]}
              centerLabel="Total"
              ariaLabel="Traffic sources"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Pie chart</Card.Header>
          <Card.Body>
            <PieChart
              data={[
                { label: 'Direct', value: 45 },
                { label: 'Organic', value: 35 },
                { label: 'Referral', value: 20 }
              ]}
              innerRadius={40}
              ariaLabel="Traffic by source"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Scatter chart</Card.Header>
          <Card.Body>
            <ScatterChart
              series={[
                {
                  name: 'Users',
                  data: [
                    { x: 1, y: 12 },
                    { x: 2, y: 18 },
                    { x: 3, y: 15 },
                    { x: 4, y: 24 },
                    { x: 5, y: 21 },
                    { x: 6, y: 28 }
                  ]
                }
              ]}
              xLabel="Week"
              yLabel="Users"
              ariaLabel="Weekly users scatter"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>Sparkline</Card.Header>
          <Card.Body>
            <Sparkline data={[4, 8, 6, 12, 9, 14, 11]} area ariaLabel="Weekly users" />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
