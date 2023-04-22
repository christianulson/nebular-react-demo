import { Card, Checkbox, Input, Radio, RadioGroup, Select } from '@nebular-react/core';
import React, { useState } from 'react';
import useStyles from './FormInputs.styles';

export function FormInputsDemo() {
  const { classes, cx } = useStyles();
  const [checked2, setChecked2] = useState<boolean>(true);

  return (
    <div className={cx(classes.root, 'row')}>
      <div className="col-lg-6">
        <Card>
          <Card.Header>Default Inputs</Card.Header>
          <Card.Body>
            <Input type="text" fullWidth placeholder="Project" />
            <div className="full-name-inputs">
              <Input type="text" fullWidth placeholder="Nick" />
              <Input type="text" fullWidth placeholder="Last Name" />
            </div>
            <Input type="password" fullWidth placeholder="Password" />
            <Input type="text" fullWidth shape="rectangle" placeholder="Rectangle border" />
            <Input type="text" fullWidth shape="semiround" placeholder="Semi-round border" />
            <Input type="text" fullWidth shape="round" placeholder="Rounded border" />
            <Input type="text" fullWidth placeholder="Disabled input" disabled />
            <Input component="textarea" rows={5} fullWidth shape="round" placeholder="Text Area" />
            <Input type="text" fullWidth size="small" placeholder="Small Input" />
            <Input type="text" fullWidth size="medium" placeholder="Medium Input" />
            <Input type="text" fullWidth size="large" placeholder="Large Input" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-6">
        <Card>
          <Card.Header>Select</Card.Header>
          <Card.Body>
            <Select defaultSelected="Option 1" options={['Option 1', 'Option 2']} />
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Validation States</Card.Header>
          <Card.Body>
            <Input type="text" fullWidth status="info" placeholder="Input with Info" />
            <Input type="text" fullWidth status="success" placeholder="Warning Input" />
            <Input type="text" fullWidth status="warning" placeholder="Danger Input" />
            <Input type="text" fullWidth status="danger" placeholder="Danger Input" />
            <Input type="text" fullWidth status="primary" placeholder="Input with Primary" />
            <div className="validation-checkboxes">
              <Checkbox status="success">Success Checkbox</Checkbox>
              <Checkbox status="warning">Warning Checkbox</Checkbox>
              <Checkbox status="danger">Danger Checkbox</Checkbox>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Checkboxes & Radios</Card.Header>
          <Card.Body className="checkbox-radio">
            <div className="demo-items">
              <Checkbox>Checkbox 1</Checkbox>
              <Checkbox checked={checked2} onCheck={(value) => setChecked2(value)}>
                Checkbox 2
              </Checkbox>
            </div>
            <div className="demo-items">
              <Radio.Group defaultValue="This is value 2">
                <Radio label="Radio 1" value="This is value 1" name="radioGroupValue" />
                <Radio label="Radio 2" value="This is value 2" name="radioGroupValue" />
                <Radio label="Radio 3" value="This is value 3" name="radioGroupValue" />
              </Radio.Group>
            </div>
            <div className="demo-items">
              <Checkbox disabled>Disabled Checkbox</Checkbox>
              <RadioGroup disabled>
                <Radio label="Disabled Radio" value="Disabled Value" name="disabledRadioGroup" />
              </RadioGroup>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
