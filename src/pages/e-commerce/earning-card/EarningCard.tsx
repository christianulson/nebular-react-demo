import { Card, FlipCard, Icon } from '@nebular-react/core';
import React from 'react';
import { EarningCardFront } from './front-side/EarningCardFront';
import useStyles from './EarningCard.styles';
import { EarningCardBack } from './back-side/EarningCardBack';

export function EarningCard() {
  const { classes, cx } = useStyles();

  return (
    <FlipCard
      front={
        <Card size="tiny">
          <EarningCardFront />
        </Card>
      }
      back={
        <Card size="tiny">
          <EarningCardBack />
        </Card>
      }
      customToggleButton={<Icon icon="chevron-right-outline" pack="eva" />}
      className={cx(classes.root)}
    />
  );
}
