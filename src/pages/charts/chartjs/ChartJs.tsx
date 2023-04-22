import { Card } from '@nebular-react/core';
import React from 'react';
import { ChartJsPie } from './ChartJsPie';
import useStyles from './ChartJs.styles';
import { ChartJsBar } from './ChartJsBar';
import { ChartJsLine } from './ChartJsLine';
import { ChartJsMultipleXAxis } from './ChartJsMultipleXAxis';
import { ChartJsBarHorizontal } from './ChartJsBarHorizontal';
import { ChartJsRadar } from './ChartJsRadar';

export function ChartJsDemo() {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, 'row')}>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Pie</Card.Header>
          <Card.Body>
            <ChartJsPie />
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Bar</Card.Header>
          <Card.Body>
            <ChartJsBar />
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Line</Card.Header>
          <Card.Body>
            <ChartJsLine />
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Multiple x-axis</Card.Header>
          <Card.Body>
            <ChartJsMultipleXAxis />
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Bar Horizontal</Card.Header>
          <Card.Body>
            <ChartJsBarHorizontal />
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Radar</Card.Header>
          <Card.Body>
            <ChartJsRadar />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
