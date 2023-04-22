import { Card, Icon } from '@nebular-react/core';
import React from 'react';
import useStyles from './Weather.styles';

export function Weather() {
  const { classes, cx } = useStyles();

  return (
    <Card size="medium" className={cx(classes.root)}>
      <Card.Body>
        <span className="h3 location">New York</span>
        <span className="date">Mon 29 May</span>

        <div className="today">
          <span className="today-temperature h1">20&deg;</span>
          <Icon icon="sun-outline" pack="eva" className="today-icon" />
        </div>

        <div className="today-details">
          <div className="parameter">
            <span className="caption parameter-name">max</span>
            <span className="parameter-value">23&deg;</span>
          </div>
          <div className="parameter">
            <span className="caption parameter-name">min</span>
            <span className="parameter-value">19&deg;</span>
          </div>
          <div className="parameter">
            <span className="caption parameter-name">wind</span>
            <span className="parameter-value">4 km/h</span>
          </div>
          <div className="parameter">
            <span className="caption parameter-name">hum</span>
            <span className="parameter-value">87%</span>
          </div>
        </div>

        <div className="weekly-forecast">
          <div className="day">
            <span className="caption">Sun</span>
            <Icon icon="cloudy-outline" pack="ion" />
            <span className="temperature">17&deg;</span>
          </div>
          <div className="day">
            <span className="caption">Mon</span>
            <Icon icon="sunny-outline" pack="ion" />
            <span className="temperature">19&deg;</span>
          </div>
          <div className="day">
            <span className="caption">Tue</span>
            <Icon icon="rainy-outline" pack="ion" />
            <span className="temperature">22&deg;</span>
          </div>
          <div className="day">
            <span className="caption">Wed</span>
            <Icon icon="partly-sunny-outline" pack="ion" />
            <span className="temperature">21&deg;</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
