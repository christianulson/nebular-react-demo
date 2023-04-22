import React from 'react';
import useStyles from './LegendChart.styles';

export enum LegendItemColor {
  GREEN = 'green',
  PURPLE = 'purple',
  LIGHT_PURPLE = 'light-purple',
  BLUE = 'blue',
  YELLOW = 'yellow'
}

interface LegendChartProps {
  legendItems: { iconColor: LegendItemColor | string; title: string }[];
}

export function LegendChart({ legendItems = [] }: LegendChartProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, 'legend-chart')}>
      {legendItems.map((legend) => (
        <div className="legend" key={legend.title}>
          <div className="legend-item-color" style={{ backgroundColor: legend.iconColor }} />
          <div className="legend-title">{legend.title}</div>
        </div>
      ))}
    </div>
  );
}
