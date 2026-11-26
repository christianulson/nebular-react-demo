import {
  Card,
  DataMappingEditor,
  DecisionTableEditor,
  FormDesigner,
  ImportPreview,
  MatrixField,
  PropertyGrid,
  RepeatableFieldset,
  SchemaForm
} from '@nebular-react/core';
import type {
  DataMapping,
  DecisionTableField,
  DecisionTableRule,
  FormDesignerField,
  ImportPreviewMapping,
  ImportPreviewRow,
  MatrixFieldColumn,
  MatrixFieldRow,
  PropertyGridField,
  SchemaFormField,
  SchemaFormValues
} from '@nebular-react/core';
import React, { useState } from 'react';

const signupFields: SchemaFormField[] = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  {
    name: 'delivery',
    label: 'Delivery',
    type: 'select',
    options: [
      { value: 'email', label: 'Email' },
      { value: 'in-app', label: 'In-app notifications' }
    ],
    required: true
  },
  {
    name: 'email',
    label: 'Email address',
    type: 'text',
    required: true,
    visibleWhen: (values) => values.delivery === 'email',
    validate: (value) =>
      typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? undefined
        : 'Enter an email address such as name@example.com.'
  }
];

const designedFields: readonly FormDesignerField[] = [
  { id: 'subject', name: 'subject', label: 'Session title', type: 'text', required: true },
  { id: 'format', name: 'format', label: 'Format', type: 'select', options: ['Online', 'On-site'] }
];

const propertyFields: readonly PropertyGridField[] = [
  {
    name: 'title',
    label: 'Label',
    type: 'text',
    category: 'Identity',
    defaultValue: 'Send message'
  },
  { name: 'id', label: 'Node ID', type: 'text', category: 'Identity', readOnly: true },
  {
    name: 'retries',
    label: 'Retry attempts',
    type: 'number',
    category: 'Execution',
    defaultValue: 3
  },
  { name: 'paused', label: 'Pause after failure', type: 'boolean', category: 'Execution' }
];

const decisionFields: DecisionTableField[] = [
  { key: 'amount', label: 'Amount', type: 'number' },
  { key: 'partner', label: 'Existing partner', type: 'boolean' }
];

const decisionOutcomes: DecisionTableField[] = [
  {
    key: 'action',
    label: 'Action',
    type: 'select',
    options: [
      { value: 'review', label: 'Request review' },
      { value: 'approve', label: 'Approve' }
    ]
  }
];

const decisionRules: DecisionTableRule[] = [
  {
    id: 'review',
    conditions: { amount: { operator: 'gte', value: '500' } },
    outcomes: { action: 'review' }
  },
  {
    id: 'approve',
    conditions: { partner: { operator: 'equals', value: 'true' } },
    outcomes: { action: 'approve' }
  }
];

const matrixColumns: MatrixFieldColumn[] = [
  { id: 'product', label: 'Product', type: 'text', required: true },
  { id: 'quantity', label: 'Quantity', type: 'number', min: 1, step: 1, required: true },
  {
    id: 'unit',
    label: 'Unit',
    type: 'select',
    options: [
      { label: 'Box', value: 'box' },
      { label: 'Pack', value: 'pack' },
      { label: 'Unit', value: 'unit' }
    ],
    required: true
  },
  { id: 'active', label: 'Available', type: 'checkbox' }
];

const importColumns = [
  { id: 'contact', label: 'Contact' },
  { id: 'email_address', label: 'Email address' },
  { id: 'marketing', label: 'Subscribed' }
];

const importFields = [
  { id: 'name', label: 'Name', required: true },
  { id: 'email', label: 'Email', required: true },
  { id: 'subscribed', label: 'Subscribed' }
];

const importRows: ImportPreviewRow[] = [
  { id: 1, cells: { contact: 'Ana', email_address: 'ana@example.test', marketing: false } },
  { id: 2, cells: { contact: 'Marta', email_address: 'marta@example.test', marketing: true } }
];

export function FormBuildersDemo() {
  const [saved, setSaved] = useState<SchemaFormValues>();
  const [designerFields, setDesignerFields] = useState(designedFields);
  const [properties, setProperties] = useState<SchemaFormValues>({
    title: 'Send confirmation',
    id: 'mail-204',
    retries: 5,
    paused: true
  });
  const [mapping, setMapping] = useState<DataMapping>({
    'contact.name': { kind: 'field', path: 'profile.fullName' },
    'contact.address': { kind: 'field', path: 'profile.email' },
    subscribe: { kind: 'field', path: 'consent.newsletter' },
    source: { kind: 'constant', value: 'portal' }
  });
  const [rows, setRows] = useState<MatrixFieldRow[]>([
    { id: '1', values: { product: 'Paper A4', quantity: 12, unit: 'pack', active: true } },
    { id: '2', values: { product: 'Labels', quantity: 0, unit: 'box', active: true } }
  ]);
  const [addresses, setAddresses] = useState([{ id: 1, street: 'Bela Vista', city: 'Sao Paulo' }]);
  const [importMapping, setImportMapping] = useState<ImportPreviewMapping>({
    name: 'contact',
    email: 'email_address',
    subscribed: 'marketing'
  });
  const [importMessage, setImportMessage] = useState('');
  const nextAddress = React.useRef(2);

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>SchemaForm</Card.Header>
          <Card.Body>
            <SchemaForm
              fields={signupFields}
              labels={{ submit: 'Subscribe' }}
              onSubmit={setSaved}
            />
            {saved && <p role="status">Subscribed as {String(saved.name)}.</p>}
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>FormDesigner</Card.Header>
          <Card.Body>
            <FormDesigner value={designerFields} onChange={setDesignerFields} />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>PropertyGrid</Card.Header>
          <Card.Body>
            <PropertyGrid fields={propertyFields} value={properties} onChange={setProperties} />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>DataMappingEditor</Card.Header>
          <Card.Body>
            <DataMappingEditor
              sources={[
                { path: 'profile.fullName', label: 'Full name' },
                { path: 'profile.email', label: 'E-mail' },
                { path: 'consent.newsletter', label: 'Newsletter opt-in' }
              ]}
              destinations={[
                { path: 'contact.name', label: 'Contact name', required: true },
                { path: 'contact.address', label: 'Contact address', required: true },
                { path: 'subscribe', label: 'Subscribe' },
                { path: 'source', label: 'Source system' }
              ]}
              sample={{
                profile: { fullName: 'Ana Silva', email: 'ana@example.test' },
                consent: { newsletter: false }
              }}
              value={mapping}
              onChange={setMapping}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>DecisionTableEditor</Card.Header>
          <Card.Body>
            <DecisionTableEditor
              fields={decisionFields}
              outcomes={decisionOutcomes}
              defaultValue={decisionRules}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>MatrixField</Card.Header>
          <Card.Body>
            <MatrixField
              label="Order items"
              columns={matrixColumns}
              value={rows}
              onChange={setRows}
              createRow={() => ({
                id: String(rows.length + 1),
                values: { product: '', quantity: null, unit: '', active: true }
              })}
              getCellError={(row, column) =>
                column.id === 'quantity' && row.values.quantity === 0
                  ? 'Enter a quantity greater than zero.'
                  : undefined
              }
              minRows={1}
              maxRows={6}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>RepeatableFieldset</Card.Header>
          <Card.Body>
            <RepeatableFieldset
              legend="Delivery addresses"
              minItems={1}
              maxItems={5}
              items={addresses}
              getItemKey={(item) => item.id}
              createItem={() => ({ id: nextAddress.current++, street: '', city: '' })}
              onChange={setAddresses}
              renderItem={({ item, inputId, onChange }) => (
                <div className="row">
                  <label className="col-12" htmlFor={`${inputId}-street`}>
                    Street
                    <input
                      id={`${inputId}-street`}
                      className="form-control"
                      value={item.street}
                      onChange={(event) => onChange({ ...item, street: event.target.value })}
                    />
                  </label>
                  <label className="col-12" htmlFor={`${inputId}-city`}>
                    City
                    <input
                      id={`${inputId}-city`}
                      className="form-control"
                      value={item.city}
                      onChange={(event) => onChange({ ...item, city: event.target.value })}
                    />
                  </label>
                </div>
              )}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>ImportPreview</Card.Header>
          <Card.Body>
            <ImportPreview
              columns={importColumns}
              fields={importFields}
              rows={importRows}
              mapping={importMapping}
              onMappingChange={setImportMapping}
              onConfirm={({ rows: confirmed }) =>
                setImportMessage(`${confirmed.length} contacts approved for import.`)
              }
              pageSize={1}
            />
            {importMessage && <p role="status">{importMessage}</p>}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
