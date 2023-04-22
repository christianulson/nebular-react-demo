import React from 'react';
import useStyles from './TrafficBar.styles';

interface TrafficBarProps {
  barData: { prevDate: string; prevValue: number; nextDate: string; nextValue: number };
  successDelta: boolean;
}

export function TrafficBar({ barData, successDelta }: TrafficBarProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root)}>
      <span className="value-prev caption">{barData.prevDate}</span>
      <div className="progress-line-container" style={{ height: `${barData.prevValue}%` }}>
        <div className="progress-line-prev" />
      </div>
      <div className="progress-line-container" style={{ height: `${barData.nextValue}%` }}>
        <div className={`progress-line-now ${successDelta ? 'success' : 'failure'}`} />
      </div>
      <span className="value-now caption">{barData.nextDate}</span>
    </div>
  );
}
