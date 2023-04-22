import { Card, Icon, List, Select, Tabset } from '@nebular-react/core';
import React from 'react';
import { ElectricityChart } from './electricity-chart/ElectricityChart';
import useStyles from './Electricity.styles';

interface Month {
  month: string;
  delta: string;
  down: boolean;
  kWatts: string;
  cost: string;
}

interface Electricity {
  title: string;
  active?: boolean;
  months: Month[];
}

export function Electricity() {
  const { classes, cx } = useStyles();

  const listData: Electricity[] = [
    {
      title: '2015',
      months: [
        { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
        { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
        { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
        { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
        { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
        { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
        { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
        { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
        { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
        { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
        { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
        { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' }
      ]
    },
    {
      title: '2016',
      active: true,
      months: [
        { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
        { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
        { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
        { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
        { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
        { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
        { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
        { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
        { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
        { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
        { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
        { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' }
      ]
    },
    {
      title: '2017',
      months: [
        { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
        { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
        { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
        { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
        { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
        { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
        { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
        { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
        { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
        { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
        { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
        { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' }
      ]
    }
  ];
  const types = ['Week', 'Month', 'Year'];

  return (
    <div className={cx(classes.root)}>
      <Card className="cards-container">
        <Card size="large" className="table-card">
          <Card.Header>Electricity Consumption</Card.Header>

          <Tabset fullWidth activeTabIndex={1}>
            {listData.map((year) => (
              <Tabset.Tab title={year.title} key={year.title}>
                <List>
                  {year.months.map((month) => (
                    <List.Item key={month.month}>
                      <span className="month">{month.month}</span>
                      <span>
                        <Icon
                          className={cx({ down: month.down, up: !month.down })}
                          icon={month.down ? 'arrow-down' : 'arrow-up'}
                          pack="eva"
                        />
                        {month.delta}
                      </span>
                      <span className="results">
                        {month.kWatts}
                        <span className="caption">kWh</span> / {month.cost}{' '}
                        <span className="caption">USD</span>
                      </span>
                    </List.Item>
                  ))}
                </List>
              </Tabset.Tab>
            ))}
          </Tabset>
        </Card>

        <Card size="large" className="chart-card">
          <Card.Header>
            <span className="stats">
              <span className="caption">Consumed</span>
              <span>
                816 <span className="caption">kWh</span>
              </span>
            </span>
            <span className="stats">
              <span className="caption">Spent</span>
              <span>
                291 <span className="caption">USD</span>
              </span>
            </span>

            <Select options={types} className="type-select" defaultSelected="Week" />
          </Card.Header>

          <ElectricityChart />
        </Card>
      </Card>
    </div>
  );
}
