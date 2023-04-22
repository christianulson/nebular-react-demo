import { Card, Icon } from '@nebular-react/core';
import React from 'react';
import { StatsAreaChart } from './StatsAreaChart';
import useStyles from './StatsCardBack.styles';

export function StatsCardBack() {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root)}>
      <Card.Header>
        <Icon icon="logo-usd" pack="ion" />
        <span className="title">Profit</span>
      </Card.Header>
      <Card.Body>
        <div className="info">
          <div className="period">
            <div className="caption">Jun 1 - Jun 30</div>
            <div className="label">
              <span className="currency">$</span>300
            </div>
          </div>
          <div className="period latest">
            <div className="caption">Jul 1 - Jul 31</div>
            <div className="label">
              <span className="currency">$</span>860
            </div>
          </div>
        </div>
        <StatsAreaChart />
      </Card.Body>
    </div>
  );
}
