import { Card, Tabset } from '@nebular-react/core';
import React, { useState } from 'react';
import { ChartPanelHeader } from './chart-panel-header/ChartPanelHeader';
import { ChartPanelSummary } from './chart-panel-summary/ChartPanelSummary';
import { OrdersChart } from './charts/OrdersChart';
import { ProfitChart } from './charts/ProfitChart';
import useStyles from './ChartsPanel.styles';

export function ChartsPanel() {
  const { classes, cx } = useStyles();

  const summary = [
    {
      title: 'Marketplace',
      value: 3654
    },
    {
      title: 'Last Month',
      value: 946
    },
    {
      title: 'Last Week',
      value: 654
    },
    {
      title: 'Today',
      value: 230
    }
  ];

  const [periodForOrders, setPeriodForOrders] = useState<string>('Week');
  const [periodForProfit, setPeriodForProfit] = useState<string>('Week');

  return (
    <Card size="large" className={cx(classes.root)}>
      <Tabset fullWidth lazyLoad>
        <Tabset.Tab title="Orders" key="orders">
          <div className="chart-container">
            <ChartPanelSummary summary={summary} />
            <ChartPanelHeader
              type={periodForOrders}
              periodChange={(value) => setPeriodForOrders(value)}
            />
            <OrdersChart period={periodForOrders} />
          </div>
        </Tabset.Tab>
        <Tabset.Tab title="Profit" key="profit">
          <div className="chart-container">
            <ChartPanelSummary summary={summary} />
            <ChartPanelHeader
              type={periodForProfit}
              periodChange={(value) => setPeriodForProfit(value)}
            />
            <ProfitChart period={periodForProfit} />
          </div>
        </Tabset.Tab>
      </Tabset>
    </Card>
  );
}
