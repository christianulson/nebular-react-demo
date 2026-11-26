import {
  Card,
  CheckboxGroup,
  ChoiceCardGroup,
  ColorPicker,
  CurrencyInput,
  DateField,
  Dropzone,
  Fieldset,
  FileInput,
  FormControl,
  FormErrorSummary,
  Input,
  InputGroup,
  MaskedInput,
  NumberFormatter,
  NumberInput,
  PasswordInput,
  PasswordStrength,
  PinInput,
  RangeSlider,
  Rating,
  SegmentedControl,
  Slider,
  SwitchGroup,
  Textarea
} from '@nebular-react/core';
import type { FormErrorSummaryItem } from '@nebular-react/core';
import React, { useState } from 'react';

export function AdvancedFormsDemo() {
  const [password, setPassword] = useState('Nebular#2026');
  const [channels, setChannels] = useState<string[]>(['email']);
  const [date, setDate] = useState<string | null>('2026-11-24');
  const [errors, setErrors] = useState<FormErrorSummaryItem[]>([]);

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Form controls</Card.Header>
          <Card.Body>
            <FormControl label="E-mail" description="Used for sign in" required htmlFor="email">
              <Input id="email" type="email" placeholder="you@example.com" />
            </FormControl>
            <FormControl label="Password" htmlFor="password">
              <PasswordInput id="password" aria-label="Password" />
            </FormControl>
            <FormControl label="Notes" htmlFor="notes">
              <Textarea id="notes" aria-label="Notes" autosize minRows={3} />
            </FormControl>
            <FormControl label="Quantity" htmlFor="quantity">
              <NumberInput id="quantity" aria-label="Quantity" min={0} max={100} />
            </FormControl>
            <FormControl label="Website" htmlFor="website">
              <InputGroup before="https://">
                <Input id="website" aria-label="Website" placeholder="your-site.com" />
              </InputGroup>
            </FormControl>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Masks and selections</Card.Header>
          <Card.Body>
            <FormControl label="CPF" htmlFor="cpf">
              <MaskedInput id="cpf" mask="999.999.999-99" aria-label="CPF" />
            </FormControl>
            <FormControl label="Amount" htmlFor="amount">
              <CurrencyInput
                id="amount"
                currency="BRL"
                locale="pt-BR"
                defaultValue={1234.5}
                aria-label="Amount"
              />
            </FormControl>
            <FormControl label="Verification code">
              <PinInput length={6} oneTimeCode ariaLabel="Verification code" />
            </FormControl>
            <CheckboxGroup
              label="Permissions"
              defaultValue={['read']}
              data={[
                { label: 'Read', value: 'read' },
                { label: 'Write', value: 'write' },
                { label: 'Delete', value: 'delete' }
              ]}
            />
            <SegmentedControl
              data={['List', 'Grid', 'Board']}
              defaultValue="List"
              ariaLabel="View mode"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Values and files</Card.Header>
          <Card.Body>
            <Rating aria-label="Rating" defaultValue={3} />
            <Slider label="Opacity" defaultValue={40} />
            <RangeSlider label="Price range" defaultValue={[20, 80]} />
            <ColorPicker label="Accent" defaultValue="#3366ff" />
            <FileInput accept="image/*" buttonLabel="Choose image" clearable />
            <Dropzone accept="image/*" onDrop={() => undefined} ariaLabel="Drop images here">
              <span>Drop images here or click to browse</span>
            </Dropzone>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Fieldset & FormErrorSummary</Card.Header>
          <Card.Body>
            <Fieldset legend="Account" description="Basic information used across the app.">
              <FormControl label="Name" htmlFor="fieldset-name">
                <Input id="fieldset-name" placeholder="Jane Doe" fullWidth />
              </FormControl>
              <FormControl label="Email" htmlFor="fieldset-email">
                <Input id="fieldset-email" type="email" placeholder="jane@example.com" fullWidth />
              </FormControl>
            </Fieldset>

            <div style={{ marginTop: '0.75rem' }}>
              <FormErrorSummary
                errors={errors}
                title="Check your contact details"
                focusOnMount={false}
              />
              <button
                type="button"
                className="btn btn-outline-primary btn-sm mt-2"
                onClick={() =>
                  setErrors([
                    { fieldId: 'fieldset-name', message: 'Enter your name' },
                    { fieldId: 'fieldset-email', message: 'Enter a valid email address' }
                  ])
                }
              >
                Simulate validation errors
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>PasswordStrength & NumberFormatter</Card.Header>
          <Card.Body>
            <FormControl label="Password" htmlFor="strength-password">
              <Input
                id="strength-password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
                fullWidth
              />
            </FormControl>
            <PasswordStrength value={password} />
            <div className="mt-3" style={{ display: 'grid', gap: '0.25rem' }}>
              <NumberFormatter value={1234567.89} locale="pt-BR" />
              <NumberFormatter
                value={1234567.89}
                locale="en-US"
                options={{ style: 'currency', currency: 'USD' }}
              />
              <NumberFormatter
                value={0.4281}
                options={{ style: 'percent', maximumFractionDigits: 1 }}
              />
              <NumberFormatter
                value={1250000}
                options={{ notation: 'compact', maximumFractionDigits: 1 }}
              />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>SwitchGroup & ChoiceCardGroup</Card.Header>
          <Card.Body>
            <SwitchGroup
              label="Notifications"
              description="Choose every channel you want to receive alerts on."
              data={[
                { label: 'Email', value: 'email' },
                { label: 'Push', value: 'push' },
                { label: 'SMS', value: 'sms' }
              ]}
              value={channels}
              onChange={setChannels}
              required
            />

            <div style={{ marginTop: '1rem' }}>
              <ChoiceCardGroup
                label="Plan"
                defaultValue="standard"
                options={[
                  {
                    value: 'standard',
                    label: 'Standard',
                    description: 'A single workspace.'
                  },
                  {
                    value: 'team',
                    label: 'Team',
                    description: 'Shared workspaces and collaboration.'
                  }
                ]}
              />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>DateField</Card.Header>
          <Card.Body>
            <DateField
              label="Scheduling date"
              description="Select a date in 2026."
              value={date}
              onChange={setDate}
              min="2026-01-01"
              max="2026-12-31"
              locale="en-US"
              name="scheduledDate"
              required
            />
            <p className="mt-2 mb-0">Selected date: {date ?? 'none'}</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
