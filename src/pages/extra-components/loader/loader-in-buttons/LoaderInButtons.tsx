import { Button, Card, Loader } from '@nebular-react/core';
import React, { useRef, useState } from 'react';
import useStyles from './LoaderInButtons.styles';

export function LoaderInButtons() {
  const { classes, cx } = useStyles();
  const [isLoadingLarge, setIsLoadingLarge] = useState<boolean>(false);
  const largeRef1 = useRef<HTMLButtonElement>(null);
  const largeRef2 = useRef<HTMLButtonElement>(null);
  const largeRef3 = useRef<HTMLButtonElement>(null);
  const [isLoadingMedium, setIsLoadingMedium] = useState<boolean>(false);
  const mediumRef1 = useRef<HTMLButtonElement>(null);
  const mediumRef2 = useRef<HTMLButtonElement>(null);
  const mediumRef3 = useRef<HTMLButtonElement>(null);

  const toggleLoadingLarge = () => {
    setTimeout(() => setIsLoadingLarge(false), 2000);
    setIsLoadingLarge(true);
  };

  const toggleLoadingMedium = () => {
    setTimeout(() => setIsLoadingMedium(false), 2000);
    setIsLoadingMedium(true);
  };

  return (
    <Card className={cx(classes.root)}>
      <Card.Header>Button With Loader</Card.Header>
      <Card.Body>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xxxl-12">
            <Button
              ref={largeRef1}
              status="success"
              size="large"
              disabled={isLoadingLarge}
              onClick={toggleLoadingLarge}
            >
              Download
            </Button>
            <Loader
              loaderContainerRef={largeRef1}
              isLoading={isLoadingLarge}
              status="success"
              size="large"
            />
            <Button
              ref={largeRef2}
              status="primary"
              size="large"
              disabled={isLoadingLarge}
              onClick={toggleLoadingLarge}
            >
              Download
            </Button>
            <Loader
              loaderContainerRef={largeRef2}
              isLoading={isLoadingLarge}
              status="primary"
              size="large"
            />
            <Button
              ref={largeRef3}
              status="warning"
              size="large"
              disabled={isLoadingLarge}
              onClick={toggleLoadingLarge}
            >
              Download
            </Button>
            <Loader
              loaderContainerRef={largeRef3}
              isLoading={isLoadingLarge}
              status="warning"
              size="large"
            />
          </div>
          <div className="col-md-12 col-lg-12 col-xxxl-12 size-medium-group">
            <Button
              ref={mediumRef1}
              status="danger"
              size="medium"
              disabled={isLoadingMedium}
              onClick={toggleLoadingMedium}
            >
              Download
            </Button>
            <Loader
              loaderContainerRef={mediumRef1}
              isLoading={isLoadingMedium}
              status="danger"
              size="medium"
            />
            <Button
              ref={mediumRef2}
              status="info"
              size="medium"
              disabled={isLoadingMedium}
              onClick={toggleLoadingMedium}
            >
              Download
            </Button>
            <Loader
              loaderContainerRef={mediumRef2}
              isLoading={isLoadingMedium}
              status="info"
              size="medium"
            />
            <Button
              ref={mediumRef3}
              status="primary"
              size="medium"
              disabled={isLoadingMedium}
              onClick={toggleLoadingMedium}
            >
              Download
            </Button>
            <Loader
              loaderContainerRef={mediumRef3}
              isLoading={isLoadingMedium}
              status="primary"
              size="medium"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
