import { Layout, Sidebar, SidebarRef, useNebularDir } from '@nebular-react/core';
import React, { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../../footer/Footer';
import { Header } from '../../header/Header';
import { PageMenu } from '../page-menu/PageMenu';
import { PageRoutes } from '../page-routes/PageRoutes';

export function OneColumnLayout() {
  const dir = useNebularDir();
  const sidebarRef = useRef<SidebarRef>(null);

  const toggleSidebar = () => sidebarRef.current?.toggle(true);

  return (
    <BrowserRouter>
      <Layout
        windowMode
        withScroll
        header={
          <Layout.Header fixed>
            <Header toggleSidebar={toggleSidebar} />
          </Layout.Header>
        }
        sidebars={
          <Sidebar ref={sidebarRef} responsive right={dir === 'rtl'}>
            <PageMenu />
          </Sidebar>
        }
        columns={
          <Layout.Column>
            <PageRoutes />
          </Layout.Column>
        }
        footer={
          <Layout.Footer fixed>
            <Footer />
          </Layout.Footer>
        }
      />
    </BrowserRouter>
  );
}
