import { Card, Icon, useNebularTheme } from '@nebular-react/core';
import React from 'react';
import useStyles from './Kitten.styles';

export function Kitten() {
  const theme = useNebularTheme();
  const { classes, cx } = useStyles();

  return (
    <Card size="medium" className={cx(classes.root)}>
      <div
        className="picture"
        style={{ backgroundImage: `url(/images/kitten-${theme.theme_name}.png)` }}
      />

      <div className="details">
        <div className="h4">UI Kitten</div>
        <div className="description">
          UI Kitten is a framework that contains a set of commonly used UI components styled in a
          similar way. The most awesome thing: you can change themes on the fly by just passing a
          different set of variables. 100% native. Give our kitten a try!
        </div>
      </div>

      <Card.Footer>
        <a
          href="https://akveo.github.io/react-native-ui-kitten?utm_campaign=ui_kitten%20-%20home%20-%20ngx_admin%20code%20embed&utm_source=ngx_admin&utm_medium=embedded&utm_content=iot_dashboard_kitten_card"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="globe" pack="eva" />
        </a>
        <a
          href="https://itunes.apple.com/us/app/kitten-tricks/id1246143230"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="logo-apple" pack="ion" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.akveo.kittenTricks"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="logo-android" pack="ion" />
        </a>
        <a href="https://github.com/akveo/react-native-ui-kitten" target="_blank" rel="noreferrer">
          <Icon icon="github" pack="eva" />
        </a>
      </Card.Footer>
    </Card>
  );
}
