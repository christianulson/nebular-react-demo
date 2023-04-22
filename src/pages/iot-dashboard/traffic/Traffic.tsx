import { Card, Select } from '@nebular-react/core';
import React from 'react';
import { TrafficChart } from './TrafficChart';
import useStyles from './Traffic.styles';

export function Traffic() {
  const { classes, cx } = useStyles();
  const types = ['Week', 'Month', 'Year'];

  return (
    <Card size="tiny" className={cx(classes.root)}>
      <Card.Header>
        <span>Traffic Consumption</span>
        <Select options={types} defaultSelected="Month" />
      </Card.Header>

      <TrafficChart />
    </Card>
  );
}
