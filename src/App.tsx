import { WindowProvider, DialogProvider, ToastrProvider } from '@nebular-react/core';
import { defaultSvgIconPacks, NebularProvider, SvgFile } from '@nebular-react/styles';
import React, { useEffect } from 'react';
import * as ionicons from 'ionicons/icons';
import { OneColumnLayout } from './components/layouts/one-column/OneColumnLayout';
import { LightTheme } from './themes/light.theme';
import 'bootstrap/dist/css/bootstrap.css';
import 'leaflet/dist/leaflet.css';
import 'nebular-icons/css/nebular-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

export default function App() {
  const _ionicons = Object.entries<string>(ionicons).map(
    (x: [string, string]): [string, SvgFile] => {
      const name = x[0].replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      return [name, { file: `https://unpkg.com/ionicons@7.1.0/dist/ionicons/svg/${name}.svg` }];
    }
  );

  const svgIconPacks = new Map(defaultSvgIconPacks);
  svgIconPacks.set('ion', new Map(_ionicons));

  useEffect(() => {
    const globalSpinner = document.querySelector<HTMLDivElement>('#global-spinner');
    if (globalSpinner) {
      globalSpinner.style.display = 'none';
    }
  }, []);

  return (
    <NebularProvider theme={LightTheme} svgIconPacks={svgIconPacks}>
      <WindowProvider>
        <DialogProvider>
          <ToastrProvider limit={50}>
            <OneColumnLayout />
          </ToastrProvider>
        </DialogProvider>
      </WindowProvider>
    </NebularProvider>
  );
}
