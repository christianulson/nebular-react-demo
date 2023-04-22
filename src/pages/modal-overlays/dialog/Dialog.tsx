import { Button, Card, closeDialog, showDialog } from '@nebular-react/core';
import React from 'react';
import useStyles from './Dialog.styles';

export function DialogDemo() {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, 'row')}>
      <div className="col-md-12 col-lg-6 col-xxxl-3">
        <Card>
          <Card.Header>Open Dialog</Card.Header>
          <Card.Body>
            <Button
              onClick={() =>
                showDialog({
                  id: 'open-dialog',
                  content: (
                    <Card className={cx(classes.dialogCard)}>
                      <Card.Header>Open Dialog</Card.Header>
                      <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis
                        tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique.
                        Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla,
                        purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu
                        arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel
                        tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed
                        sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa
                        aliquet et.
                      </Card.Body>
                      <Card.Footer>
                        <Button status="primary" onClick={() => closeDialog('open-dialog')}>
                          Dismiss Dialog
                        </Button>
                      </Card.Footer>
                    </Card>
                  )
                })
              }
            >
              Open Dialog
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-3">
        <Card>
          <Card.Header>Open Without Backdrop</Card.Header>
          <Card.Body>
            <Button
              onClick={() =>
                showDialog({
                  id: 'open-dialog-with-backdrop',
                  content: (
                    <Card className={cx(classes.dialogCard)}>
                      <Card.Header>Open Dialog with backdrop</Card.Header>
                      <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis
                        tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique.
                        Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla,
                        purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu
                        arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel
                        tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed
                        sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa
                        aliquet et.
                      </Card.Body>
                      <Card.Footer>
                        <Button
                          status="primary"
                          onClick={() => closeDialog('open-dialog-with-backdrop')}
                        >
                          Dismiss Dialog
                        </Button>
                      </Card.Footer>
                    </Card>
                  )
                })
              }
            >
              Open Dialog with backdrop
            </Button>
            <Button
              onClick={() =>
                showDialog({
                  id: 'open-dialog-without-backdrop',
                  hasBackdrop: false,
                  content: (
                    <Card className={cx(classes.dialogCard)}>
                      <Card.Header>Open Dialog with backdrop</Card.Header>
                      <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis
                        tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique.
                        Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla,
                        purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu
                        arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel
                        tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed
                        sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa
                        aliquet et.
                      </Card.Body>
                      <Card.Footer>
                        <Button
                          status="primary"
                          onClick={() => closeDialog('open-dialog-without-backdrop')}
                        >
                          Dismiss Dialog
                        </Button>
                      </Card.Footer>
                    </Card>
                  )
                })
              }
            >
              Open Dialog without backdrop
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-3">
        <Card>
          <Card.Header>Open Without Esc Close</Card.Header>
          <Card.Body>
            <Button
              onClick={() =>
                showDialog({
                  id: 'open-dialog-with-esc-close',
                  content: (
                    <Card className={cx(classes.dialogCard)}>
                      <Card.Header>Open Dialog with backdrop</Card.Header>
                      <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis
                        tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique.
                        Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla,
                        purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu
                        arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel
                        tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed
                        sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa
                        aliquet et.
                      </Card.Body>
                      <Card.Footer>
                        <Button
                          status="primary"
                          onClick={() => closeDialog('open-dialog-with-esc-close')}
                        >
                          Dismiss Dialog
                        </Button>
                      </Card.Footer>
                    </Card>
                  )
                })
              }
            >
              Open Dialog with esc close
            </Button>
            <Button
              onClick={() =>
                showDialog({
                  id: 'open-dialog-without-esc-close',
                  closeOnEsc: false,
                  content: (
                    <Card className={cx(classes.dialogCard)}>
                      <Card.Header>Open Dialog with backdrop</Card.Header>
                      <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis
                        tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique.
                        Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla,
                        purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu
                        arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel
                        tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed
                        sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa
                        aliquet et.
                      </Card.Body>
                      <Card.Footer>
                        <Button
                          status="primary"
                          onClick={() => closeDialog('open-dialog-without-esc-close')}
                        >
                          Dismiss Dialog
                        </Button>
                      </Card.Footer>
                    </Card>
                  )
                })
              }
            >
              Open Dialog without esc close
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-3">
        <Card>
          <Card.Header>Open Without Backdrop Click</Card.Header>
          <Card.Body>
            <Button
              onClick={() =>
                showDialog({
                  id: 'open-dialog-with-backdrop-click',
                  content: (
                    <Card className={cx(classes.dialogCard)}>
                      <Card.Header>Open Dialog with backdrop</Card.Header>
                      <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis
                        tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique.
                        Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla,
                        purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu
                        arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel
                        tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed
                        sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa
                        aliquet et.
                      </Card.Body>
                      <Card.Footer>
                        <Button
                          status="primary"
                          onClick={() => closeDialog('open-dialog-with-backdrop-click')}
                        >
                          Dismiss Dialog
                        </Button>
                      </Card.Footer>
                    </Card>
                  )
                })
              }
            >
              Open Dialog with backdrop click
            </Button>
            <Button
              onClick={() =>
                showDialog({
                  id: 'open-dialog-without-backdrop-click',
                  closeOnBackdropClick: false,
                  content: (
                    <Card className={cx(classes.dialogCard)}>
                      <Card.Header>Open Dialog with backdrop</Card.Header>
                      <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis
                        tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique.
                        Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla,
                        purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu
                        arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel
                        tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed
                        sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa
                        aliquet et.
                      </Card.Body>
                      <Card.Footer>
                        <Button
                          status="primary"
                          onClick={() => closeDialog('open-dialog-without-backdrop-click')}
                        >
                          Dismiss Dialog
                        </Button>
                      </Card.Footer>
                    </Card>
                  )
                })
              }
            >
              Open Dialog without backdrop click
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
