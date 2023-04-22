import React from 'react';
import useStyles from './Footer.styles';

export function Footer() {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.root)}>
      <span className="created-by">
        Created with ♥ by{' '}
        <b>
          <a href="https://akveo.page.link/8V2f" target="_blank" rel="noreferrer">
            Akveo
          </a>
        </b>{' '}
        2019
      </span>
      <div className="socials">
        <a href="#" target="_blank" className="ion ion-social-github" />
        <a href="#" target="_blank" className="ion ion-social-facebook" />
        <a href="#" target="_blank" className="ion ion-social-twitter" />
        <a href="#" target="_blank" className="ion ion-social-linkedin" />
      </div>
    </div>
  );
}
