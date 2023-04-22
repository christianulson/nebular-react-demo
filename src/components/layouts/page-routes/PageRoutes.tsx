import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChartJsDemo } from '../../../pages/charts/chartjs/ChartJs';
import { EChartsDemo } from '../../../pages/charts/echarts/ECharts';
import { ECommerce } from '../../../pages/e-commerce/ECommerce';
import { CKEditorDemo } from '../../../pages/editors/ckeditor/CKEditor';
import { TinyMCEDemo } from '../../../pages/editors/tinymce/TinyMCE';
import { AlertDemo } from '../../../pages/extra-components/alert/Alert';
import { CalendarKitDemo } from '../../../pages/extra-components/calendar-kit/CalendarKit';
import { CalendarDemo } from '../../../pages/extra-components/calendar/Calendar';
import { ChatDemo } from '../../../pages/extra-components/chat/Chat';
import { LoaderDemo } from '../../../pages/extra-components/loader/Loader';
import { ProgressBarDemo } from '../../../pages/extra-components/progress-bar/ProgressBar';
import { ButtonsDemo } from '../../../pages/forms/buttons/Buttons';
import { DatepickerDemo } from '../../../pages/forms/datepicker/Datepicker';
import { FormInputsDemo } from '../../../pages/forms/form-inputs/FormInputs';
import { FormLayoutsDemo } from '../../../pages/forms/form-layouts/FormLayouts';
import { IotDashboard } from '../../../pages/iot-dashboard/IotDashboard';
import { AccordionDemo } from '../../../pages/layout/accordion/Accordion';
import { ListDemo } from '../../../pages/layout/list/List';
import { StepperDemo } from '../../../pages/layout/stepper/Stepper';
import { TabsDemo } from '../../../pages/layout/tabs/Tabs';
import { BubbleMapsDemo } from '../../../pages/maps/bubble/BubbleMaps';
import GoogleMapsDemo from '../../../pages/maps/google-maps/GoogleMaps';
import { LeafletMapsDemo } from '../../../pages/maps/leaflet/LeafletMaps';
import { DialogDemo } from '../../../pages/modal-overlays/dialog/Dialog';
import { PopoverDemo } from '../../../pages/modal-overlays/popover/Popover';
import { ToastrDemo } from '../../../pages/modal-overlays/toastr/Toastr';
import { TooltipDemo } from '../../../pages/modal-overlays/tooltip/Tooltip';
import { WindowDemo } from '../../../pages/modal-overlays/window/Window';
import { ReactTableDemo } from '../../../pages/tables/react-table/ReactTable';
import { GridDemo } from '../../../pages/ui-features/grid/Grid';
import { IconsDemo } from '../../../pages/ui-features/icons/Icons';
import { SearchFieldsDemo } from '../../../pages/ui-features/search-fields/SearchFields';
import { TypographyDemo } from '../../../pages/ui-features/typography/Typography';

export function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ECommerce />} />
      <Route path="/iot-dashboard" element={<IotDashboard />} />
      <Route path="/layout/stepper" element={<StepperDemo />} />
      <Route path="/layout/list" element={<ListDemo />} />
      <Route path="/layout/accordion" element={<AccordionDemo />} />
      <Route path="/layout/tabs" element={<TabsDemo />} />
      <Route path="/forms/form-inputs" element={<FormInputsDemo />} />
      <Route path="/forms/form-layouts" element={<FormLayoutsDemo />} />
      <Route path="/forms/buttons" element={<ButtonsDemo />} />
      <Route path="/forms/datepicker" element={<DatepickerDemo />} />
      <Route path="/ui-features/grid" element={<GridDemo />} />
      <Route path="/ui-features/icons" element={<IconsDemo />} />
      <Route path="/ui-features/typography" element={<TypographyDemo />} />
      <Route path="/ui-features/animated-searches" element={<SearchFieldsDemo />} />
      <Route path="/modal-overlays/dialog" element={<DialogDemo />} />
      <Route path="/modal-overlays/window" element={<WindowDemo />} />
      <Route path="/modal-overlays/popover" element={<PopoverDemo />} />
      <Route path="/modal-overlays/toastr" element={<ToastrDemo />} />
      <Route path="/modal-overlays/tooltip" element={<TooltipDemo />} />
      <Route path="/extra-components/calendar" element={<CalendarDemo />} />
      <Route path="/extra-components/progress-bar" element={<ProgressBarDemo />} />
      <Route path="/extra-components/loader" element={<LoaderDemo />} />
      <Route path="/extra-components/alert" element={<AlertDemo />} />
      <Route path="/extra-components/calendar-kit" element={<CalendarKitDemo />} />
      <Route path="/extra-components/chat" element={<ChatDemo />} />
      <Route path="/maps/google-maps" element={<GoogleMapsDemo />} />
      <Route path="/maps/leaflet-maps" element={<LeafletMapsDemo />} />
      <Route path="/maps/bubble-maps" element={<BubbleMapsDemo />} />
      <Route path="/charts/echarts" element={<EChartsDemo />} />
      <Route path="/charts/chartsjs" element={<ChartJsDemo />} />
      <Route path="/editors/ckeditor" element={<CKEditorDemo />} />
      <Route path="/editors/tinymce" element={<TinyMCEDemo />} />
      <Route path="/tables-data/react-table" element={<ReactTableDemo />} />
    </Routes>
  );
}
