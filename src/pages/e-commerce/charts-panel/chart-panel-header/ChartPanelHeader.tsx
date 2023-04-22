import { Select, useNebularTheme } from '@nebular-react/core';
import React from 'react';
import { LegendChart } from '../../legend-chart/LegendChart';
import useStyles from './ChartPanelHeader.styles';

interface ChartPanelHeaderProps {
  type: string;
  periodChange: (period: string) => void;
}

export function ChartPanelHeader({ type, periodChange }: ChartPanelHeaderProps) {
  const theme = useNebularTheme();
  const { classes, cx } = useStyles();

  const chartLegend = [
    {
      iconColor: theme.variables.success,
      title: 'Payment'
    },
    {
      iconColor: theme.variables.primary,
      title: 'Canceled'
    },
    {
      iconColor: theme.variables.bg4,
      title: 'All orders'
    }
  ];
  const types = ['Week', 'Month', 'Year'];

  return (
    <div className={cx(classes.root)}>
      <LegendChart legendItems={chartLegend} />
      <Select
        className="period-select"
        defaultSelected={type}
        options={types}
        onSelect={(period) => typeof periodChange === 'function' && periodChange(period as string)}
      />
    </div>
  );
}
