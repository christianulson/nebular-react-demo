import { Card, Select } from '@nebular-react/core';
import React from 'react';
import useStyles from './TrafficCardHeader.styles';

interface TrafficCardHeaderProps {
  type: string;
  periodChange: (period: string) => void;
}

export function TrafficCardHeader({ type, periodChange }: TrafficCardHeaderProps) {
  const { classes, cx } = useStyles();
  const types = ['Week', 'Month', 'Year'];

  return (
    <Card.Header className={cx(classes.root)}>
      <span>Traffic</span>
      <Select
        defaultSelected={type}
        options={types}
        onSelect={(period) => typeof periodChange === 'function' && periodChange(period as string)}
      />
    </Card.Header>
  );
}
