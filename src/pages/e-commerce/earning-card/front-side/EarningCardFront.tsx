import { Card, Icon, Option, Select } from '@nebular-react/core';
import React, { useState } from 'react';
import { EarningLiveUpdateChart } from './EarningLiveUpdateChart';
import useStyles from './EarningCardFront.styles';
import { NumberWithCommas } from '../../../../utils/number-with-commas';

export function EarningCardFront() {
  const liveUpdateChartData = {
    bitcoin: {
      delta: {
        up: true,
        value: 4
      },
      dailyIncome: 45895
    },
    tether: {
      delta: {
        up: false,
        value: 9
      },
      dailyIncome: 5862
    },
    ethereum: {
      delta: {
        up: false,
        value: 21
      },
      dailyIncome: 584
    }
  };

  const { classes, cx } = useStyles();
  const [selectedCurrency, setSelectedCurrency] = useState<string>('Bitcoin');
  const currencies: Option[] = [
    { type: 'option', label: 'Bitcoin', value: 'Bitcoin' },
    { type: 'option', label: 'Tether', value: 'Tether' },
    { type: 'option', label: 'Ethereum', value: 'Ethereum' }
  ];

  const selectHandler = (selected: Option) => {
    if (selected.value !== selectedCurrency) {
      setSelectedCurrency(selected.value);
    }
  };

  return (
    <div className={cx(classes.root)}>
      <Card.Header>
        <Select options={currencies} defaultSelected="Bitcoin" onSelect={selectHandler} />
      </Card.Header>
      <Card.Body>
        <div className="chart-info">
          <div>Daily Income</div>
          <div className="h6">
            {NumberWithCommas(liveUpdateChartData[selectedCurrency.toLowerCase()].dailyIncome)}
          </div>
          <div
            className={cx('delta', {
              up: liveUpdateChartData[selectedCurrency.toLowerCase()].delta.up,
              down: !liveUpdateChartData[selectedCurrency.toLowerCase()].delta.up
            })}
          >
            <Icon
              icon={
                liveUpdateChartData[selectedCurrency.toLowerCase()].delta.up
                  ? 'arrow-up'
                  : 'arrow-down'
              }
              pack="eva"
              className="direction"
            />
            {liveUpdateChartData[selectedCurrency.toLowerCase()].delta.value}%
          </div>
        </div>
        <EarningLiveUpdateChart selectedCurrency={selectedCurrency} />
      </Card.Body>
    </div>
  );
}
