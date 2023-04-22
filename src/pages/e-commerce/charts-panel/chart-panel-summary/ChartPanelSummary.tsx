import React from 'react';
import useStyles from './ChartPanelSummary.styles';

interface ChartPanelSummaryProps {
  summary: { title: string; value: number }[];
}

export function ChartPanelSummary({ summary }: ChartPanelSummaryProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.container)}>
      {summary.map((item) => (
        <div key={item.title}>
          <div>{item.title}</div>
          <div className="h6">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
