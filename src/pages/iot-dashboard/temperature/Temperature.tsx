import { Card, Radio, Tabset, useNebularTheme } from '@nebular-react/core';
import React, { useState } from 'react';
import { TemperatureDragger } from './temperature-dragger/TemperatureDragger';
import useStyles from './Temperature.styles';

export function Temperature() {
  const theme = useNebularTheme();
  const { classes, cx } = useStyles();
  const [temperature, setTemperature] = useState<number>(24);
  const [temperatureOff, setTemperatureOff] = useState<boolean>(false);
  const [humidity, setHumidity] = useState<number>(87);
  const [humidityOff, setHumidityOff] = useState<boolean>(false);

  return (
    <Card size="large" className={cx(classes.root)}>
      <Tabset fullWidth>
        <Tabset.Tab title="Temperature">
          <div className="slider-container">
            <TemperatureDragger
              value={temperature}
              min={12}
              max={30}
              disableArcColor={theme.variables.bg2}
              fillColors={[
                theme.variables.primary,
                theme.variables.primary,
                theme.variables.primary,
                theme.variables.primary,
                theme.variables.primary
              ]}
              thumbBg={theme.variables.bg2}
              thumbBorderColor={theme.variables.primary}
              onPowerChange={(off) => setTemperatureOff(!off)}
              onValueChange={(newValue) => setTemperature(newValue)}
            >
              <div
                className={cx('slider-value-container', {
                  off: temperatureOff
                })}
              >
                <div className="value temperature h1">
                  {temperatureOff ? '--' : Math.round(temperature)}
                </div>
                <div className="desc">Celsius</div>
              </div>
            </TemperatureDragger>
          </div>

          <Radio.Group defaultValue="cool">
            <Radio
              label={<i className="nb-snowy-circled" />}
              value="cool"
              name="temperature-mode"
            />
            <Radio
              label={<i className="nb-sunny-circled" />}
              value="warm"
              name="temperature-mode"
            />
            <Radio
              label={<i className="nb-flame-circled" />}
              value="heat"
              name="temperature-mode"
            />
            <Radio label={<i className="nb-loop-circled" />} value="fan" name="temperature-mode" />
          </Radio.Group>
        </Tabset.Tab>

        <Tabset.Tab title="Humidity">
          <div className="slider-container">
            <TemperatureDragger
              value={humidity}
              min={0}
              max={100}
              disableArcColor={theme.variables.bg2}
              fillColors={[
                theme.variables.primary,
                theme.variables.primary,
                theme.variables.primary,
                theme.variables.primary,
                theme.variables.primary
              ]}
              thumbBg={theme.variables.bg2}
              thumbBorderColor={theme.variables.primary}
              onPowerChange={(off) => setHumidityOff(!off)}
              onValueChange={(newValue) => setHumidity(newValue)}
            >
              <div className={cx('slider-value-container', { off: humidityOff })}>
                <div className="value humidity h1">{humidityOff ? '--' : Math.round(humidity)}</div>
              </div>
            </TemperatureDragger>
          </div>

          <Radio.Group defaultValue="heat">
            <Radio label={<i className="nb-snowy-circled" />} value="cool" name="humidity-mode" />
            <Radio label={<i className="nb-sunny-circled" />} value="warm" name="humidity-mode" />
            <Radio label={<i className="nb-flame-circled" />} value="heat" name="humidity-mode" />
            <Radio label={<i className="nb-loop-circled" />} value="fan" name="humidity-mode" />
          </Radio.Group>
        </Tabset.Tab>
      </Tabset>
    </Card>
  );
}
