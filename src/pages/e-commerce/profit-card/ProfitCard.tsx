import { Card, FlipCard, Icon } from '@nebular-react/core';
import React from 'react';
import { StatsCardBack } from './back-side/StatsCardBack';
import { StatsCardFront } from './front-side/StatsCardFront';
import useStyles from './ProfitCard.styles';

export function ProfitCard() {
  const { classes, cx } = useStyles();

  return (
    <FlipCard
      front={
        <Card size="tiny">
          <StatsCardFront />
        </Card>
      }
      back={
        <Card size="tiny">
          <StatsCardBack />
        </Card>
      }
      customToggleButton={<Icon icon="chevron-right-outline" pack="eva" />}
      className={cx(classes.root)}
    />
  );
}
