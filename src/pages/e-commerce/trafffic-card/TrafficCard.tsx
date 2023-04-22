import { Card, Icon, RevealCard } from '@nebular-react/core';
import React, { useState } from 'react';
import { TrafficBackCard } from './back-side/TrafficBackCard';
import { TrafficFrontCard } from './front-side/TrafficFrontCard';
import { TrafficCardHeader } from './traffic-card-header/TrafficCardHeader';
import useStyles from './TrafficCard.styles';

export function TrafficCard() {
  const { classes, cx } = useStyles();

  const [periodForFront, setPeriodForFront] = useState<string>('Week');
  const [periodForBack, setPeriodForBack] = useState<string>('Week');

  return (
    <RevealCard
      front={
        <Card size="small">
          <TrafficCardHeader
            type={periodForFront}
            periodChange={(value) => setPeriodForFront(value)}
          />
          <TrafficFrontCard period={periodForFront} />
        </Card>
      }
      back={
        <Card size="small">
          <TrafficCardHeader
            type={periodForBack}
            periodChange={(value) => setPeriodForBack(value)}
          />
          <TrafficBackCard period={periodForBack} />
        </Card>
      }
      customToggleButton={<Icon icon="chevron-up-outline" pack="eva" />}
      className={cx(classes.root)}
    />
  );
}
