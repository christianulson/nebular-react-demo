import React from 'react';
import { Routes, Route } from 'react-router-dom';

const ChartJsDemo = React.lazy(() =>
  import('../../../pages/charts/chartjs/ChartJs').then((module) => ({
    default: module.ChartJsDemo
  }))
);
const EChartsDemo = React.lazy(() =>
  import('../../../pages/charts/echarts/ECharts').then((module) => ({
    default: module.EChartsDemo
  }))
);
const ECommerce = React.lazy(() =>
  import('../../../pages/e-commerce/ECommerce').then((module) => ({
    default: module.ECommerce
  }))
);
const CKEditorDemo = React.lazy(() =>
  import('../../../pages/editors/ckeditor/CKEditor').then((module) => ({
    default: module.CKEditorDemo
  }))
);
const TinyMCEDemo = React.lazy(() =>
  import('../../../pages/editors/tinymce/TinyMCE').then((module) => ({
    default: module.TinyMCEDemo
  }))
);
const AlertDemo = React.lazy(() =>
  import('../../../pages/extra-components/alert/Alert').then((module) => ({
    default: module.AlertDemo
  }))
);
const CalendarKitDemo = React.lazy(() =>
  import('../../../pages/extra-components/calendar-kit/CalendarKit').then((module) => ({
    default: module.CalendarKitDemo
  }))
);
const CalendarDemo = React.lazy(() =>
  import('../../../pages/extra-components/calendar/Calendar').then((module) => ({
    default: module.CalendarDemo
  }))
);
const ChatDemo = React.lazy(() =>
  import('../../../pages/extra-components/chat/Chat').then((module) => ({
    default: module.ChatDemo
  }))
);
const LoaderDemo = React.lazy(() =>
  import('../../../pages/extra-components/loader/Loader').then((module) => ({
    default: module.LoaderDemo
  }))
);
const ProgressBarDemo = React.lazy(() =>
  import('../../../pages/extra-components/progress-bar/ProgressBar').then((module) => ({
    default: module.ProgressBarDemo
  }))
);
const ButtonsDemo = React.lazy(() =>
  import('../../../pages/forms/buttons/Buttons').then((module) => ({
    default: module.ButtonsDemo
  }))
);
const DatepickerDemo = React.lazy(() =>
  import('../../../pages/forms/datepicker/Datepicker').then((module) => ({
    default: module.DatepickerDemo
  }))
);
const FormInputsDemo = React.lazy(() =>
  import('../../../pages/forms/form-inputs/FormInputs').then((module) => ({
    default: module.FormInputsDemo
  }))
);
const FormLayoutsDemo = React.lazy(() =>
  import('../../../pages/forms/form-layouts/FormLayouts').then((module) => ({
    default: module.FormLayoutsDemo
  }))
);
const IotDashboard = React.lazy(() =>
  import('../../../pages/iot-dashboard/IotDashboard').then((module) => ({
    default: module.IotDashboard
  }))
);
const AccordionDemo = React.lazy(() =>
  import('../../../pages/layout/accordion/Accordion').then((module) => ({
    default: module.AccordionDemo
  }))
);
const ListDemo = React.lazy(() =>
  import('../../../pages/layout/list/List').then((module) => ({
    default: module.ListDemo
  }))
);
const StepperDemo = React.lazy(() =>
  import('../../../pages/layout/stepper/Stepper').then((module) => ({
    default: module.StepperDemo
  }))
);
const TabsDemo = React.lazy(() =>
  import('../../../pages/layout/tabs/Tabs').then((module) => ({
    default: module.TabsDemo
  }))
);
const BubbleMapsDemo = React.lazy(() =>
  import('../../../pages/maps/bubble/BubbleMaps').then((module) => ({
    default: module.BubbleMapsDemo
  }))
);
const GoogleMapsDemo = React.lazy(() => import('../../../pages/maps/google-maps/GoogleMaps'));
const LeafletMapsDemo = React.lazy(() =>
  import('../../../pages/maps/leaflet/LeafletMaps').then((module) => ({
    default: module.LeafletMapsDemo
  }))
);
const DialogDemo = React.lazy(() =>
  import('../../../pages/modal-overlays/dialog/Dialog').then((module) => ({
    default: module.DialogDemo
  }))
);
const PopoverDemo = React.lazy(() =>
  import('../../../pages/modal-overlays/popover/Popover').then((module) => ({
    default: module.PopoverDemo
  }))
);
const ToastrDemo = React.lazy(() =>
  import('../../../pages/modal-overlays/toastr/Toastr').then((module) => ({
    default: module.ToastrDemo
  }))
);
const TooltipDemo = React.lazy(() =>
  import('../../../pages/modal-overlays/tooltip/Tooltip').then((module) => ({
    default: module.TooltipDemo
  }))
);
const WindowDemo = React.lazy(() =>
  import('../../../pages/modal-overlays/window/Window').then((module) => ({
    default: module.WindowDemo
  }))
);
const ReactTableDemo = React.lazy(() =>
  import('../../../pages/tables/react-table/ReactTable').then((module) => ({
    default: module.ReactTableDemo
  }))
);
const GridDemo = React.lazy(() =>
  import('../../../pages/ui-features/grid/Grid').then((module) => ({
    default: module.GridDemo
  }))
);
const IconsDemo = React.lazy(() =>
  import('../../../pages/ui-features/icons/Icons').then((module) => ({
    default: module.IconsDemo
  }))
);
const SearchFieldsDemo = React.lazy(() =>
  import('../../../pages/ui-features/search-fields/SearchFields').then((module) => ({
    default: module.SearchFieldsDemo
  }))
);
const TypographyDemo = React.lazy(() =>
  import('../../../pages/ui-features/typography/Typography').then((module) => ({
    default: module.TypographyDemo
  }))
);
const SelectDemo = React.lazy(() =>
  import('../../../pages/components/select/SelectDemo').then((module) => ({
    default: module.SelectDemo
  }))
);
const DataGridDemo = React.lazy(() =>
  import('../../../pages/components/data-grid/DataGridDemo').then((module) => ({
    default: module.DataGridDemo
  }))
);
const AdvancedFormsDemo = React.lazy(() =>
  import('../../../pages/components/advanced-forms/AdvancedFormsDemo').then((module) => ({
    default: module.AdvancedFormsDemo
  }))
);
const DisplayDemo = React.lazy(() =>
  import('../../../pages/components/display/DisplayDemo').then((module) => ({
    default: module.DisplayDemo
  }))
);
const OverlaysDemo = React.lazy(() =>
  import('../../../pages/components/overlays/OverlaysDemo').then((module) => ({
    default: module.OverlaysDemo
  }))
);
const NebularChartsDemo = React.lazy(() =>
  import('../../../pages/components/charts/NebularChartsDemo').then((module) => ({
    default: module.NebularChartsDemo
  }))
);
const ComponentsLabDemo = React.lazy(() =>
  import('../../../pages/components/lab/ComponentsLabDemo').then((module) => ({
    default: module.ComponentsLabDemo
  }))
);
const AdvancedChartsDemo = React.lazy(() =>
  import('../../../pages/components/charts/AdvancedChartsDemo').then((module) => ({
    default: module.AdvancedChartsDemo
  }))
);
const DataViewsDemo = React.lazy(() =>
  import('../../../pages/components/data-views/DataViewsDemo').then((module) => ({
    default: module.DataViewsDemo
  }))
);
const UtilitiesDemo = React.lazy(() =>
  import('../../../pages/components/utilities/UtilitiesDemo').then((module) => ({
    default: module.UtilitiesDemo
  }))
);
const LayoutKitDemo = React.lazy(() =>
  import('../../../pages/components/layout-kit/LayoutKitDemo').then((module) => ({
    default: module.LayoutKitDemo
  }))
);
const ContentKitDemo = React.lazy(() =>
  import('../../../pages/components/content-kit/ContentKitDemo').then((module) => ({
    default: module.ContentKitDemo
  }))
);
const EditorsDemo = React.lazy(() =>
  import('../../../pages/components/editors/EditorsDemo').then((module) => ({
    default: module.EditorsDemo
  }))
);
const FormBuildersDemo = React.lazy(() =>
  import('../../../pages/components/form-builders/FormBuildersDemo').then((module) => ({
    default: module.FormBuildersDemo
  }))
);
const WorkspaceDemo = React.lazy(() =>
  import('../../../pages/components/workspace/WorkspaceDemo').then((module) => ({
    default: module.WorkspaceDemo
  }))
);
const MediaDemo = React.lazy(() =>
  import('../../../pages/components/media/MediaDemo').then((module) => ({
    default: module.MediaDemo
  }))
);
const SchedulingDemo = React.lazy(() =>
  import('../../../pages/components/scheduling/SchedulingDemo').then((module) => ({
    default: module.SchedulingDemo
  }))
);
const InsightsDemo = React.lazy(() =>
  import('../../../pages/components/insights/InsightsDemo').then((module) => ({
    default: module.InsightsDemo
  }))
);
const MoreChartsDemo = React.lazy(() =>
  import('../../../pages/components/charts/MoreChartsDemo').then((module) => ({
    default: module.MoreChartsDemo
  }))
);
const I18nDemo = React.lazy(() =>
  import('../../../pages/components/i18n/I18nDemo').then((module) => ({
    default: module.I18nDemo
  }))
);

export function PageRoutes() {
  return (
    <React.Suspense fallback={<div className="page-loading">Loading...</div>}>
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
        <Route path="/components/select" element={<SelectDemo />} />
        <Route path="/components/data-grid" element={<DataGridDemo />} />
        <Route path="/components/advanced-forms" element={<AdvancedFormsDemo />} />
        <Route path="/components/display" element={<DisplayDemo />} />
        <Route path="/components/overlays" element={<OverlaysDemo />} />
        <Route path="/components/charts" element={<NebularChartsDemo />} />
        <Route path="/components/charts-advanced" element={<AdvancedChartsDemo />} />
        <Route path="/components/data-views" element={<DataViewsDemo />} />
        <Route path="/components/utilities" element={<UtilitiesDemo />} />
        <Route path="/components/layout-kit" element={<LayoutKitDemo />} />
        <Route path="/components/content-kit" element={<ContentKitDemo />} />
        <Route path="/components/editors" element={<EditorsDemo />} />
        <Route path="/components/form-builders" element={<FormBuildersDemo />} />
        <Route path="/components/workspace" element={<WorkspaceDemo />} />
        <Route path="/components/media" element={<MediaDemo />} />
        <Route path="/components/scheduling" element={<SchedulingDemo />} />
        <Route path="/components/insights" element={<InsightsDemo />} />
        <Route path="/components/charts-more" element={<MoreChartsDemo />} />
        <Route path="/components/i18n" element={<I18nDemo />} />
        <Route path="/components/lab" element={<ComponentsLabDemo />} />
      </Routes>
    </React.Suspense>
  );
}
