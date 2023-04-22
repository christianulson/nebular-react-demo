import { Card, DEFAULT_MEDIA_BREAKPOINTS } from '@nebular-react/core';
import { useBreakpoint } from '@nebular-react/hooks';
import React, { useCallback, useState } from 'react';
import { CountryOrdersChart } from './chart/CountryOrdersChart';
import { CountryOrdersMap } from './map/CountryOrdersMap';
import useStyles from './CountryOrders.styles';

export function CountryOrders() {
  const { breakpointState } = useBreakpoint();
  const { classes, cx } = useStyles();
  const [countryId, setCountryId] = useState<string>();

  const countryChangeHandler = useCallback((_countryId: string) => {
    setCountryId(_countryId);
  }, []);

  return (
    <Card
      size={
        breakpointState.currBreakpoint.width >= DEFAULT_MEDIA_BREAKPOINTS.md ? 'medium' : 'giant'
      }
    >
      <Card.Header>Country Orders Statistics</Card.Header>
      <Card.Body className={cx(classes.cardBody)}>
        <CountryOrdersMap onSelectFeature={countryChangeHandler} />
        <CountryOrdersChart countryId={countryId} />
      </Card.Body>
    </Card>
  );
}
