import {
  Button,
  Card,
  Checkbox,
  ComponentStatus,
  Input,
  Select,
  showToast
} from '@nebular-react/core';
import {
  GlobalLogicalPosition,
  GlobalPhysicalPosition,
  GlobalPosition
} from '@nebular-react/hooks';
import React, { useState } from 'react';
import useStyles from './Toastr.styles';

export function ToastrDemo() {
  const positions: string[] = [
    GlobalPhysicalPosition.TOP_RIGHT,
    GlobalPhysicalPosition.TOP_LEFT,
    GlobalPhysicalPosition.BOTTOM_RIGHT,
    GlobalPhysicalPosition.BOTTOM_LEFT,
    GlobalLogicalPosition.TOP_END,
    GlobalLogicalPosition.TOP_START,
    GlobalLogicalPosition.BOTTOM_END,
    GlobalLogicalPosition.BOTTOM_START
  ];

  const quotes = [
    { title: 'Quote 1', body: 'We rock at React' },
    { title: 'Quote 2', body: 'Titles are not always needed' },
    { title: 'Quote 3', body: 'Toastr rock!' }
  ];

  const types: ComponentStatus[] = ['primary', 'success', 'info', 'warning', 'danger'];

  const { classes, cx } = useStyles();

  const [position, setPosition] = useState<GlobalPosition>(GlobalPhysicalPosition.TOP_RIGHT);
  const [title, setTitle] = useState<string>('HI there!');
  const [content, setContent] = useState<string>("I'm cool toaster!");
  const [autoClose, setAutoClose] = useState<number>(2000);
  const [type, setType] = useState<ComponentStatus>('primary');
  const [hideOnClick, setHideOnClick] = useState<boolean>(true);
  const [withIcon, setWithIcon] = useState<boolean>(true);

  const makeToast = () => {
    showToast({
      message: content,
      title,
      userConfig: {
        status: type,
        destroyByClick: hideOnClick,
        hasIcon: withIcon,
        position,
        autoClose
      }
    });
  };

  const openRandomToast = () => {
    const rType = types[Math.floor(Math.random() * types.length)];
    const rQuote = quotes[Math.floor(Math.random() * quotes.length)];
    showToast({
      message: rQuote.body,
      title: rQuote.title,
      userConfig: {
        status: rType,
        destroyByClick: hideOnClick,
        hasIcon: withIcon,
        position,
        autoClose
      }
    });
  };

  return (
    <Card className={cx(classes.root)}>
      <Card.Header>Toaster configuration</Card.Header>
      <Card.Body>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label className="label">Position:</label>
              <Select
                options={positions}
                className="position-select"
                defaultSelected="top-right"
                onSelect={(value) => setPosition(value as GlobalPosition)}
              />
            </div>

            <div className="form-group">
              <label className="label">Title:</label>
              <Input
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>

            <form>
              <div className="form-group">
                <label className="label">Content:</label>
                <Input
                  name="content"
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                />
              </div>
            </form>

            <div className="form-group">
              <label className="label">Time to hide toast, ms. 0 to persistent toast:</label>
              <Input
                type="number"
                name="timeout"
                value={autoClose}
                onChange={(event) => setAutoClose(parseInt(event.target.value, 10))}
              />
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label className="label">Toast type:</label>
              <Select
                options={types}
                defaultSelected="primary"
                onSelect={(value) => setType(value as ComponentStatus)}
              />
            </div>

            <div>
              <Checkbox onCheck={(value) => setHideOnClick(value)} checked={hideOnClick}>
                Hide on click
              </Checkbox>
            </div>
            <div>
              <Checkbox onCheck={(value) => setWithIcon(value)} checked={withIcon}>
                Show toast with icon
              </Checkbox>
            </div>
          </div>
        </div>
      </Card.Body>

      <Card.Footer>
        <Button onClick={() => makeToast()}>Show toast</Button>
        <Button status="success" onClick={() => openRandomToast()}>
          Random toast
        </Button>
      </Card.Footer>
    </Card>
  );
}
