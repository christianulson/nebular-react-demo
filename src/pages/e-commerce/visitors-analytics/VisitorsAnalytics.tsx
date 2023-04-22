import { Card, useNebularTheme } from '@nebular-react/core';
import React from 'react';
import { LegendChart } from '../legend-chart/LegendChart';
import { SlideOut } from '../slide-out/SlideOut';
import { VisitorsAnalyticsChart } from './visitors-analytics-chart/VisitorsAnalyticsChart';
import { VisitorsStatistics } from './visitors-statistics/VisitorsStatistics';
import useStyles from './VisitorsAnalytics.styles';

export function VisitorsAnalytics() {
  const theme = useNebularTheme();
  const { classes, cx } = useStyles();

  const chartLegend = [
    {
      iconColor: theme.variables.success,
      title: 'Unique Visitors'
    },
    {
      iconColor: theme.variables.primary,
      title: 'Page Views'
    }
  ];

  return (
    <div className={cx(classes.root)}>
      <Card size="medium">
        <Card.Header>
          <h3>Visitors Analytics</h3>
          <div className="subtitle">Consumption</div>
        </Card.Header>
        <Card.Body>
          <div className="chart-container">
            <div className="chart-header">
              <LegendChart legendItems={chartLegend} />
            </div>
            <VisitorsAnalyticsChart />
          </div>
        </Card.Body>

        <SlideOut initialShowVisitorsStatistics>
          <VisitorsStatistics />
        </SlideOut>
      </Card>
    </div>
  );
}
