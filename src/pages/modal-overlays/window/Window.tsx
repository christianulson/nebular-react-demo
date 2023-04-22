import { Button, Card, Input, showWindow } from '@nebular-react/core';
import React from 'react';
import useStyles from './Window.styles';

export function WindowDemo() {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, 'row')}>
      <div className="col-md-12 col-lg-12 col-xxxl-6">
        <Card>
          <Card.Header>Window Form</Card.Header>
          <Card.Body>
            <Button
              onClick={() =>
                showWindow({
                  title: 'Window',
                  content: (
                    <form className={cx(classes.form)}>
                      <label htmlFor="subject">Subject:</label>
                      <Input id="subject" type="text" fullWidth />
                      <label htmlFor="text" className="text-label">
                        Text:
                      </label>
                      <Input component="textarea" id="text" fullWidth />
                    </form>
                  )
                })
              }
            >
              Open window
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-12 col-xxxl-6">
        <Card>
          <Card.Header>Window Without Backdrop</Card.Header>
          <Card.Body>
            <Button
              onClick={() =>
                showWindow({
                  title: 'Window with backdrop',
                  content: (
                    <form className={cx(classes.form)}>
                      <label htmlFor="subject">Subject:</label>
                      <Input id="subject" type="text" fullWidth />
                      <label htmlFor="text" className="text-label">
                        Text:
                      </label>
                      <Input component="textarea" id="text" fullWidth />
                    </form>
                  )
                })
              }
            >
              Open window with backdrop
            </Button>
            <Button
              onClick={() =>
                showWindow({
                  title: 'Window without backdrop',
                  hasBackdrop: false,
                  content: (
                    <form className={cx(classes.form)}>
                      <label htmlFor="subject">Subject:</label>
                      <Input id="subject" type="text" fullWidth />
                      <label htmlFor="text" className="text-label">
                        Text:
                      </label>
                      <Input component="textarea" id="text" fullWidth />
                    </form>
                  )
                })
              }
            >
              Open window without backdrop
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
