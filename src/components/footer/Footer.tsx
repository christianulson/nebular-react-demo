import React from 'react';
import { Icon } from '@nebular-react/core';
import useStyles from './Footer.styles';

export function Footer() {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.root)}>
      <span className="created-by">
        Created with{' '}
        <b>
          <a href="https://github.com/hirol888/nebular-react" target="_blank" rel="noreferrer">
            Nebular React
          </a>
        </b>{' '}
        2023
      </span>
      <div className="socials">
        <a href="https://github.com/hirol888/nebular-react-demo" target="_blank" rel="noreferrer">
          <Icon icon="logo-github" pack="ion" />
        </a>
        <a href="https://www.linkedin.com/in/huining-li-2b05ab26/" target="_blank" rel="noreferrer">
          <Icon icon="logo-linkedin" pack="ion" />
        </a>
      </div>
    </div>
  );
}
