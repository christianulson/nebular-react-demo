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
      <MenuItem id="new-components" title="New Components" group>
        <MenuItem
          id="select-advanced"
          title="Select & Autocomplete"
          icon={<Icon icon="chevron-down-outline" />}
          component={Link}
          to="/components/select"
        />
        <MenuItem
          id="data-grid"
          title="DataGrid"
          icon={<Icon icon="grid-outline" />}
          component={Link}
          to="/components/data-grid"
        />
        <MenuItem
          id="advanced-forms"
          title="Advanced Forms"
          icon={<Icon icon="edit-2-outline" />}
          component={Link}
          to="/components/advanced-forms"
        />
        <MenuItem
          id="display-components"
          title="Display & Feedback"
          icon={<Icon icon="layers-outline" />}
          component={Link}
          to="/components/display"
        />
        <MenuItem
          id="overlay-components"
          title="Overlays & Editor"
          icon={<Icon icon="browser-outline" />}
          component={Link}
          to="/components/overlays"
        />
        <MenuItem
          id="nebular-charts"
          title="Nebular Charts"
          icon={<Icon icon="pie-chart-outline" />}
          component={Link}
          to="/components/charts"
        />
        <MenuItem
          id="advanced-charts"
          title="Advanced Charts"
          icon={<Icon icon="bar-chart-outline" />}
          component={Link}
          to="/components/charts-advanced"
        />
        <MenuItem
          id="data-views"
          title="Data Views"
          icon={<Icon icon="list-outline" />}
          component={Link}
          to="/components/data-views"
        />
        <MenuItem
          id="utilities"
          title="Utilities & Feedback"
          icon={<Icon icon="settings-2-outline" />}
          component={Link}
          to="/components/utilities"
        />
        <MenuItem
          id="layout-kit"
          title="Layout Kit"
          icon={<Icon icon="grid-outline" />}
          component={Link}
          to="/components/layout-kit"
        />
        <MenuItem
          id="content-kit"
          title="Content Kit"
          icon={<Icon icon="image-outline" />}
          component={Link}
          to="/components/content-kit"
        />
        <MenuItem
          id="editors"
          title="Editors & Diff"
          icon={<Icon icon="text-outline" />}
          component={Link}
          to="/components/editors"
        />
        <MenuItem
          id="form-builders"
          title="Form Builders"
          icon={<Icon icon="build-outline" />}
          component={Link}
          to="/components/form-builders"
        />
        <MenuItem
          id="workspace"
          title="Workspace & Collaboration"
          icon={<Icon icon="briefcase-outline" />}
          component={Link}
          to="/components/workspace"
        />
        <MenuItem
          id="media"
          title="Media & Files"
          icon={<Icon icon="film-outline" />}
          component={Link}
          to="/components/media"
        />
        <MenuItem
          id="scheduling"
          title="Scheduling"
          icon={<Icon icon="calendar-outline" />}
          component={Link}
          to="/components/scheduling"
        />
        <MenuItem
          id="insights"
          title="Insights & Diagnostics"
          icon={<Icon icon="activity-outline" />}
          component={Link}
          to="/components/insights"
        />
        <MenuItem
          id="charts-more"
          title="More Charts"
          icon={<Icon icon="bar-chart-outline" />}
          component={Link}
          to="/components/charts-more"
        />
        <MenuItem
          id="i18n"
          title="Internationalization"
          icon={<Icon icon="globe-outline" />}
          component={Link}
          to="/components/i18n"
        />
        <MenuItem
          id="desktop-mode"
          title="Desktop Mode"
          icon={<Icon icon="monitor-outline" />}
          component={Link}
          to="/components/desktop"
        />
        <MenuItem
          id="components-lab"
          title="Components Lab"
          icon={<Icon icon="flask-outline" />}
          component={Link}
          to="/components/lab"
        />
      </MenuItem>
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
