import { Card, Icon } from '@nebular-react/core';
import React from 'react';
import { StatsBarAnimationChart } from './StatsBarAnimationChart';
import useStyles from './StatsCardFront.styles';

export function StatsCardFront() {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root)}>
      <Card.Header>
        <Icon icon="logo-usd" pack="ion" />
        <span className="title">Profit</span>
      </Card.Header>
      <Card.Body>
        <StatsBarAnimationChart />
      </Card.Body>
    </div>
  );
}
