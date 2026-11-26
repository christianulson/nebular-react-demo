import {
  Calendar,
  Card,
  CronInput,
  DataGrid,
  DataGridColumn,
  NumberFormatter,
  Pagination,
  SegmentedControl,
  Transfer
} from '@nebular-react/core';
import { NebularProvider, useNebularLocale } from '@nebular-react/styles';
import React, { useState } from 'react';

import { LightTheme } from '../../../themes/light.theme';

interface LocaleRow {
  id: number;
  name: string;
  role: string;
}

const localeRows: LocaleRow[] = [
  { id: 1, name: 'Alice Silva', role: 'Admin' },
  { id: 2, name: 'Bob Santos', role: 'Editor' },
  { id: 3, name: 'Carol Souza', role: 'Viewer' },
  { id: 4, name: 'David Lima', role: 'Editor' }
];

const localeColumns: DataGridColumn<LocaleRow>[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'role', title: 'Role', sortable: true }
];

type DemoLocale = 'en-US' | 'pt-BR';

function LocaleSummary() {
  const { locale, hasLocale, t } = useNebularLocale();

  return (
    <div style={{ marginTop: '0.75rem' }}>
      <p>
        Active locale: <strong>{locale}</strong> {hasLocale ? '(from provider)' : '(default)'}
      </p>
      <ul style={{ marginBottom: 0 }}>
        <li>
          <span data-testid="locale-today">{t('common.today', 'Today')}</span>
        </li>
        <li>
          <span data-testid="locale-page">{t('pagination.page', 'Page {page}', { page: 3 })}</span>
        </li>
        <li>
          <span data-testid="locale-undo">{t('dataGrid.undo', 'Undo')}</span>
        </li>
      </ul>
    </div>
  );
}

function RtlSummary() {
  const { locale, t } = useNebularLocale();

  return (
    <div data-testid="rtl-summary" dir="rtl">
      <p>
        {t('common.today', 'Today')} · {locale}
      </p>
      <Pagination total={5} defaultPage={2} ariaLabel="RTL pagination" />
    </div>
  );
}

export function I18nDemo() {
  const [locale, setLocale] = useState<DemoLocale>('en-US');
  const [date, setDate] = useState<Date>(new Date(2026, 10, 18));

  return (
    <NebularProvider
      theme={LightTheme}
      locale={locale}
      withNormalizeCSS={false}
      withGlobalStyles={false}
      withOverlayStyles={false}
    >
      <div className="row">
        <div className="col-12">
          <Card>
            <Card.Header>Global locale & messages</Card.Header>
            <Card.Body>
              <SegmentedControl
                ariaLabel="Locale"
                fullWidth
                value={locale}
                onChange={(value) => setLocale(value as DemoLocale)}
                data={[
                  { label: 'English (en-US)', value: 'en-US' },
                  { label: 'Português (pt-BR)', value: 'pt-BR' }
                ]}
              />
              <LocaleSummary />
            </Card.Body>
          </Card>
        </div>

        <div className="col-12">
          <Card>
            <Card.Header>Message overrides & RTL</Card.Header>
            <Card.Body>
              <NebularProvider
                theme={LightTheme}
                locale="pt-BR"
                messages={{ 'common.today': 'Hoje (override)' }}
                dir="rtl"
                withNormalizeCSS={false}
                withGlobalStyles={false}
                withOverlayStyles={false}
              >
                <RtlSummary />
              </NebularProvider>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-12 col-lg-6">
          <Card>
            <Card.Header>NumberFormatter & Pagination</Card.Header>
            <Card.Body>
              <p>
                <NumberFormatter value={1234567.89} />
              </p>
              <p>
                <NumberFormatter value={1234.5} options={{ style: 'currency', currency: 'BRL' }} />
              </p>
              <Pagination total={8} defaultPage={3} ariaLabel="Localized pagination" />
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-12 col-lg-6">
          <Card>
            <Card.Header>Calendar</Card.Header>
            <Card.Body>
              <Calendar<Date> date={date} onDateChange={setDate} />
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-12 col-lg-6">
          <Card>
            <Card.Header>CronInput presets</Card.Header>
            <Card.Body>
              <CronInput label="Schedule" defaultValue="0 9 * * 1-5" presets />
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-12 col-lg-6">
          <Card>
            <Card.Header>Transfer labels</Card.Header>
            <Card.Body>
              <Transfer
                data={[
                  { value: 'read', label: 'Ler' },
                  { value: 'write', label: 'Escrever' },
                  { value: 'delete', label: 'Excluir' },
                  { value: 'admin', label: 'Administrar' }
                ]}
                defaultValue={['read']}
                titles={['Disponível', 'Selecionado']}
                labels={{
                  search: 'Buscar permissões',
                  moveToSelected: 'Mover para selecionadas',
                  moveToAvailable: 'Mover para disponíveis'
                }}
                searchable
                ariaLabel="Permissões"
              />
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-12 col-lg-6">
          <Card>
            <Card.Header>DataGrid localized + labels override</Card.Header>
            <Card.Body>
              <DataGrid
                data={localeRows}
                columns={localeColumns}
                pageSize={2}
                withSelection
                withColumnVisibility
                labels={{
                  undo: 'Back',
                  redo: 'Forward',
                  columns: 'Visible columns'
                }}
                caption="Users"
                ariaLabel="Localized users grid"
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    </NebularProvider>
  );
}
