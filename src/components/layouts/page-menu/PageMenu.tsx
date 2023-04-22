import { Icon, Menu, MenuItem } from '@nebular-react/core';
import React from 'react';
import { Link } from 'react-router-dom';

export function PageMenu() {
  return (
    <Menu multiple>
      <MenuItem
        component={Link}
        id="e-commerce"
        title="e-commerce"
        icon={<Icon icon="shopping-cart-outline" />}
        to="/"
      />
      <MenuItem
        component={Link}
        id="iot-dashboard"
        title="IoT Dashboard"
        icon={<Icon icon="home-outline" />}
        to="/iot-dashboard"
      />
      <MenuItem id="features" title="Features" group>
        <MenuItem id="layout" title="Layout" icon={<Icon icon="layout-outline" />}>
          <MenuItem id="stepper" title="Stepper" component={Link} to="/layout/stepper" />
          <MenuItem id="list" title="List" component={Link} to="/layout/list" />
          {/* <MenuItem id="infinite-list" title="Infinite List" href="/pages/layout/infinite-list" /> */}
          <MenuItem id="accordion" title="Accordion" component={Link} to="/layout/accordion" />
          <MenuItem id="tabs" title="Tabs" component={Link} to="/layout/tabs" />
        </MenuItem>
        <MenuItem id="forms" title="Forms" icon={<Icon icon="edit-2-outline" />}>
          <MenuItem id="form-inputs" title="Form Inputs" component={Link} to="/forms/form-inputs" />
          <MenuItem
            id="form-layouts"
            title="Form Layouts"
            component={Link}
            to="/forms/form-layouts"
          />
          <MenuItem id="buttons" title="Buttons" component={Link} to="/forms/buttons" />
          <MenuItem id="datepicker" title="Datepicker" component={Link} to="/forms/datepicker" />
        </MenuItem>
        <MenuItem id="ui-features" title="UI Features" icon={<Icon icon="keypad-outline" />}>
          <MenuItem id="grid" title="Grid" component={Link} to="/ui-features/grid" />
          <MenuItem id="icons" title="Icons" component={Link} to="/ui-features/icons" />
          <MenuItem
            id="typography"
            title="Typography"
            component={Link}
            to="/ui-features/typography"
          />
          <MenuItem
            id="animated-searches"
            title="Animated Searches"
            component={Link}
            to="/ui-features/animated-searches"
          />
        </MenuItem>
        <MenuItem
          id="modal-overlays"
          title="Modal & Overlays"
          icon={<Icon icon="browser-outline" />}
        >
          <MenuItem id="dialog" title="Dialog" component={Link} to="/modal-overlays/dialog" />
          <MenuItem id="window" title="Window" component={Link} to="/modal-overlays/window" />
          <MenuItem id="popover" title="Popover" component={Link} to="/modal-overlays/popover" />
          <MenuItem id="toastr" title="Toastr" component={Link} to="/modal-overlays/toastr" />
          <MenuItem id="tooltip" title="Tooltip" component={Link} to="/modal-overlays/tooltip" />
        </MenuItem>
        <MenuItem
          id="extra-components"
          title="Extra Components"
          icon={<Icon icon="message-circle-outline" />}
        >
          <MenuItem
            id="calendar"
            title="Calendar"
            component={Link}
            to="/extra-components/calendar"
          />
          <MenuItem
            id="progress-bar"
            title="Progress Bar"
            component={Link}
            to="/extra-components/progress-bar"
          />
          <MenuItem id="loader" title="Loader" component={Link} to="/extra-components/loader" />
          <MenuItem id="alert" title="Alert" component={Link} to="/extra-components/alert" />
          <MenuItem
            id="calendar-kit"
            title="Calendar Kit"
            component={Link}
            to="/extra-components/calendar-kit"
          />
          <MenuItem id="chat" title="Chat" component={Link} to="/extra-components/chat" />
        </MenuItem>
        <MenuItem id="maps" title="Maps" icon={<Icon icon="map-outline" />}>
          <MenuItem id="google-maps" title="Google Maps" component={Link} to="/maps/google-maps" />
          <MenuItem
            id="leaflet-maps"
            title="Leaflet Maps"
            component={Link}
            to="/maps/leaflet-maps"
          />
          <MenuItem id="bubble-maps" title="Bubble Maps" component={Link} to="/maps/bubble-maps" />
        </MenuItem>
        <MenuItem id="charts" title="Charts" icon={<Icon icon="pie-chart-outline" />}>
          <MenuItem id="echarts" title="Echarts" component={Link} to="/charts/echarts" />
          <MenuItem id="chartsjs" title="Charts.js" component={Link} to="/charts/chartsjs" />
        </MenuItem>
        <MenuItem id="editors" title="Editors" icon={<Icon icon="text-outline" />}>
          <MenuItem id="tinymce" title="TinyMCE" component={Link} to="/editors/tinymce" />
          <MenuItem id="ckeditor" title="CKEditor" component={Link} to="/editors/ckeditor" />
        </MenuItem>
        <MenuItem id="tables-data" title="Tables & Data" icon={<Icon icon="grid-outline" />}>
          <MenuItem
            id="react-table"
            title="React Table"
            component={Link}
            to="/tables-data/react-table"
          />
          <MenuItem id="tree-grid" title="Tree Grid" href="/pages/tables-data/tree-grid" />
        </MenuItem>
      </MenuItem>
    </Menu>
  );
}
