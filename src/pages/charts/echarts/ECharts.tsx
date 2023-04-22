import { Card } from '@nebular-react/core';
import React from 'react';
import { EChartsAreaStack } from './EChartsAreaStack';
import { EChartsBar } from './EChartsBar';
import { EChartsBarAnimation } from './EChartsBarAnimation';
import { EChartsLine } from './EChartsLine';
import { EChartsMultipleXAxis } from './EChartsMultipleXAxis';
import { EChartsPie } from './EChartsPie';
import { EChartsRadar } from './EChartsRadar';

export function EChartsDemo() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <Card>
          <Card.Header>Pie</Card.Header>
          <Card.Body>
            <EChartsPie />
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Bar</Card.Header>
          <Card.Body>
            <EChartsBar />
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Line</Card.Header>
          <Card.Body>
            <EChartsLine />
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Multiple x-axis</Card.Header>
          <Card.Body>
            <EChartsMultipleXAxis />
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Area Stack</Card.Header>
          <Card.Body>
            <EChartsAreaStack />
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Bar Animation</Card.Header>
          <Card.Body>
            <EChartsBarAnimation />
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Radar</Card.Header>
          <Card.Body>
            <EChartsRadar />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
