import { Card } from '@nebular-react/core';
import React, { useMemo } from 'react';
import { TrafficBarChart } from './TrafficBarChart';
import useStyles from './TrafficBackCard.styles';

interface TrafficBar {
  data: number[];
  labels: string[];
  formatter: string;
}

interface TrafficBackCardProps {
  period: string;
}

export function TrafficBackCard({ period }: TrafficBackCardProps) {
  const { classes, cx } = useStyles();

  const data = useMemo(
    () => ({
      week: getDataForWeekPeriod(),
      month: getDataForMonthPeriod(),
      year: getDataForYearPeriod()
    }),
    []
  );

  return (
    <div className={cx(classes.root)}>
      <Card.Body>
        <TrafficBarChart
          data={data[period.toLowerCase()].data}
          labels={data[period.toLowerCase()].labels}
          formatter={data[period.toLowerCase()].formatter}
        />
      </Card.Body>
    </div>
  );
}

function getDataForWeekPeriod(): TrafficBar {
  return {
    data: [10, 15, 19, 7, 20, 13, 15],
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    formatter: '{c0} MB'
  };
}

function getDataForMonthPeriod(): TrafficBar {
  return {
    data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    formatter: '{c0} GB'
  };
}

function getDataForYearPeriod(): TrafficBar {
  return {
    data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
    formatter: '{c0} GB'
  };
}
