# Nebular React Demo

Demo application for the [Nebular React](https://github.com/hirol888/nebular-react) UI library.

## Stack

- React 19
- Vite 8
- React Router 7
- TanStack Table 9
- ECharts 6 + Chart.js 4
- CKEditor 5 (v49) + TinyMCE 8
- TypeScript 7 (`tsc`) with TypeScript 6 API for ESLint
- ESLint 9 (flat config, Airbnb Extended)
- Vitest 5 + Testing Library + axe

## Nebular React packages

This demo consumes the published packages from npm:

- `@nebular-react/core` `1.0.0`
- `@nebular-react/hooks` `1.0.0`
- `@nebular-react/styles` `1.0.0`

Run `yarn install` to fetch them.

## Commands

```sh
yarn dev          # Vite dev server
yarn build        # Typecheck + production build
yarn preview      # Preview production build
yarn typecheck    # TypeScript only
yarn lint         # ESLint
yarn lint:fix     # ESLint with autofix
yarn prettier     # Prettier check
yarn test         # Vitest
yarn coverage     # Vitest + coverage
yarn test:e2e     # Playwright E2E + axe accessibility checks
yarn verify       # Typecheck, lint, format, unit tests and build
yarn verify:full  # verify + Playwright E2E (used by CI)
```

## Structure

```
src/
  components/      - Demo components grouped by feature
  pages/           - Demo pages (charts, forms, tables, layouts, etc.)
  themes/          - Theme definitions (light, dark, cosmic, corporate)
  App.tsx          - Root component
  main.tsx         - Entrypoint
  test/            - Vitest setup
```

Routes are lazy-loaded in `src/components/layouts/page-routes/PageRoutes.tsx`, so each demo page is
its own chunk.

## Desktop mode

- `/components/desktop` — desktop embedded in the classic sidebar layout, configured through the
  declarative `apps`/`defaultWindows` API with local/session storage layout adapters. It also offers
  a **REST adapter (mock)** option that runs `createRestLayoutAdapter` against a fetch
  implementation backed by localStorage, so load/save can be exercised without a real backend.
- `/desktop` — fullscreen desktop shell with persisted layout, workspaces, command palette
  (`Ctrl/Cmd+K`), overview and window keyboard shortcuts. Opening or focusing a window updates
  `?app=<id>`, and switching workspaces updates `?workspace=<id>`, both with `replace`. The URL
  always reflects the current context without remounting the desktop or breaking reloads: synced
  URLs are marked in history state, so a reload restores the persisted layout instead of acting as
  a fresh deep link.
- `/desktop?app=datagrid` - deep link that opens the requested demo app in its own window. The
  initial link is snapshotted, so later URL syncs do not replace the layout, and the deep link skips
  layout persistence so the requested window is always visible.
- The fullscreen taskbar and command palette expose **Reset layout**, which clears the persisted
  layout key, removes the synced `?app`/`?workspace` params (an initial deep link keeps its app)
  and remounts the desktop with the default windows.
- The Demo Explorer hides the desktop and explorer apps themselves, so it cannot nest another
  desktop shell inside the current one.
- Every classic demo route keeps working exactly as before; the desktop is an additional way to
  open the same pages.
- Cross-browser E2E is opt-in: install the browsers with
  `npx playwright install firefox webkit` and set `PW_ALL_BROWSERS=1`
  (`$env:PW_ALL_BROWSERS=1` on PowerShell) before `yarn test:e2e`.

## Component showcases

The `New Components` section of the sidebar groups the showcases added for the latest library work:

| Route                         | Contents                                                                                                                                                                                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/components/select`          | Searchable, clearable, grouped and virtualized Select; Autocomplete; Combobox; NativeSelect; MultiSelect                                                                                                                                                           |
| `/components/data-grid`       | DataGrid with sorting, filters, selection, column tools, CSV export and virtualization                                                                                                                                                                             |
| `/components/advanced-forms`  | Form controls, masks, currency, PIN, rating, sliders, color picker, file input, dropzone, Fieldset, FormErrorSummary, PasswordStrength, NumberFormatter, SwitchGroup, ChoiceCardGroup and DateField                                                                |
| `/components/display`         | Breadcrumbs, Stat/KpiCard, Timeline, Descriptions, ScrollArea, Spoiler, Tree, Transfer, PageHeader, Pagination, Skeleton, EmptyState, Table, Popconfirm, TreeTable, Scheduler, Chip, ChipGroup, ColorSwatch, ThemeIcon, AvatarGroup, Tags, Result and RingProgress |
| `/components/overlays`        | Drawer, ConfirmDialog, CommandPalette, HoverCard and RichTextEditor                                                                                                                                                                                                |
| `/components/charts`          | Line, Area, Bar, Donut, Pie, Scatter and Sparkline charts                                                                                                                                                                                                          |
| `/components/charts-advanced` | Funnel, TreeMap, Waterfall, Bullet, Radar, Gauge, Heatmap, Combo and Stacked bar charts, plus an exportable ChartContainer                                                                                                                                         |
| `/components/charts-more`     | BoxPlot, Bubble, Candlestick, CalendarHeatmap, Chord, Dendrogram, Hexbin, Mekko, NetworkGraph, ParallelCoordinates, Pictogram, PolarArea, RadialBar, Sankey, StepLine, StreamGraph, Sunburst, Violin, Waffle and WordCloud                                         |
| `/components/data-views`      | GanttChart, PivotTable, DiffViewer, VirtualList and InfiniteScroll                                                                                                                                                                                                 |
| `/components/utilities`       | CodeBlock, CopyButton, JsonViewer, Kbd, VisuallyHidden, LoadingBar, Indicator, Barcode, CronInput, DocumentInput, PhoneInput, AppShell, SplitPane, Carousel, Modal, ImageViewer, ErrorBoundary, Overlay, SortableList, SpeedDial, SplitButton and Wizard           |
| `/components/layout-kit`      | Container, Flex, Stack, Grid, AspectRatio, Affix, BackTop, FloatButton, Watermark and Typography                                                                                                                                                                   |
| `/components/content-kit`     | Markdown, Mentions, SignaturePad, ImageCropper, AvatarEditor, FileManager, OrgChart, Form and Timepicker                                                                                                                                                           |
| `/components/editors`         | CodeEditor, JsonEditor, MarkdownEditor, TemplateEditor, EmojiPicker and IconPicker                                                                                                                                                                                 |
| `/components/form-builders`   | SchemaForm, FormDesigner, PropertyGrid, DataMappingEditor, DecisionTableEditor, MatrixField, RepeatableFieldset and ImportPreview                                                                                                                                  |
| `/components/workspace`       | DockLayout, Toolbar, TableOfContents, OverflowList, InlineEdit, BulkActionBar, ResponsiveFilterBar, PermissionMatrix, AuditTrail, VersionHistory, RecordPicker and OnboardingChecklist                                                                             |
| `/components/media`           | MediaPlayer, FilePreview, ImageComparison, ImageAnnotator, LocationPicker, TranscriptViewer, UploadQueue, FileButton and Masonry                                                                                                                                   |
| `/components/scheduling`      | RecurrenceEditor, TimeSlotPicker and AvailabilityEditor                                                                                                                                                                                                            |
| `/components/insights`        | KpiCard, LogViewer, TraceWaterfall, ChatSources and ConflictResolutionDialog                                                                                                                                                                                       |
| `/components/lab`             | Anchor, Cascader, TreeSelect, DashboardGrid, FilterBuilder, Kanban, NotificationCenter, Tour, Image, QRCode, MindMap and WorkflowDesigner                                                                                                                          |

The form demos also cover Datepicker, Rangepicker, DatetimePicker, DateTimeRangePicker, MonthPicker, MonthRangePicker, QuarterPicker, TimeRangePicker, WeekPicker, YearPicker, YearRangePicker and TimeZonePicker, including presets, disabled dates and the native date adapter.
