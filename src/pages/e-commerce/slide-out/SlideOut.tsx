import { Icon } from '@nebular-react/core';
import React, { useState } from 'react';
import useStyles from './SlideOut.styles';

interface SlideOutProps {
  initialShowVisitorsStatistics: boolean;
  children?: React.ReactNode;
}

export function SlideOut({ initialShowVisitorsStatistics = false, children }: SlideOutProps) {
  const { classes, cx } = useStyles();
  const [showVisitorsStatistics, setShowVisitorsStatistics] = useState<boolean>(
    initialShowVisitorsStatistics
  );

  return (
    <div className={cx(classes.root)}>
      <Icon
        icon={showVisitorsStatistics ? 'arrow-forward-outline' : 'arrow-back-outline'}
        className="show-hide-toggle"
        pack="eva"
        onClick={() => setShowVisitorsStatistics(!showVisitorsStatistics)}
      />
      <div
        className={cx('slide-out-container', {
          expanded: showVisitorsStatistics,
          collapsed: !showVisitorsStatistics
        })}
      >
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  );
}
