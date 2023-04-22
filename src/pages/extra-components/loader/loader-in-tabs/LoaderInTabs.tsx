import { Card, Loader, Tabset } from '@nebular-react/core';
import React, { useRef, useState } from 'react';

export function LoaderInTabs() {
  const [isLoading1, setIsLoading1] = useState<boolean>(false);
  const [isLoading2, setIsLoading2] = useState<boolean>(false);
  const tabRef1 = useRef<HTMLDivElement>(null);
  const tabRef2 = useRef<HTMLDivElement>(null);

  const toggleLoading = (tabIndex: number) => {
    if (tabIndex === 0) {
      setTimeout(() => setIsLoading1(false), 1000);
      setIsLoading1(true);
    }
    if (tabIndex === 1) {
      setTimeout(() => setIsLoading2(false), 1000);
      setIsLoading2(true);
    }
  };

  return (
    <Card size="small">
      <Card.Body>
        <Tabset fullWidth onTabChange={toggleLoading}>
          <Tabset.Tab title="Tab 1" ref={tabRef1} style={{ padding: '1.25rem' }}>
            <p>
              A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
              Originally, nebula was a name for any diffuse astronomical object.
            </p>
          </Tabset.Tab>
          <Tabset.Tab title="Tab 2" ref={tabRef2} style={{ padding: '1.25rem' }}>
            <p>
              Nebular&quot;s primary goal is to assemble together and connect the most awesome
              features and libraries creating an efficient ecosystem to speed up and simplify the
              development.
            </p>
          </Tabset.Tab>
        </Tabset>
        <Loader loaderContainerRef={tabRef1} status="success" size="giant" isLoading={isLoading1} />
        <Loader loaderContainerRef={tabRef2} status="info" size="giant" isLoading={isLoading2} />
      </Card.Body>
    </Card>
  );
}
