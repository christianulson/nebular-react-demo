import { Button, Card, Checkbox, Input, Radio, RadioGroup } from '@nebular-react/core';
import React from 'react';
import useStyles from './FormLayouts.styles';

export function FormLayoutsDemo() {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root)}>
      <div className="row">
        <div className="col-md-12">
          <Card className="inline-form-card">
            <Card.Header>Inline form</Card.Header>
            <Card.Body>
              <form className="form-inline">
                <Input type="text" fullWidth placeholder="Jane Doe" />
                <Input type="text" fullWidth placeholder="Email" />
                <Checkbox>Remember me</Checkbox>
                <Button type="submit" status="primary">
                  Submit
                </Button>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Header>Using the Grid</Card.Header>
            <Card.Body>
              <form>
                <div className="form-group row">
                  <label htmlFor="inputEmail1" className="label col-sm-3 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-9">
                    <Input type="email" fullWidth id="inputEmail1" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword2" className="label col-sm-3 col-form-label">
                    Password
                  </label>
                  <div className="col-sm-9">
                    <Input type="password" fullWidth id="inputPassword2" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 label">Radios</label>
                  <div className="col-sm-9">
                    <RadioGroup>
                      <Radio label="Option 1" value="Option 1" name="radios" />
                      <Radio label="Option 2" value="Option 2" name="radios" />
                      <Radio
                        label="Disabled Option"
                        value="Disabled Option"
                        name="radios"
                        disabled
                      />
                    </RadioGroup>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-sm-3 col-sm-9">
                    <Button type="submit" status="primary">
                      Sign in
                    </Button>
                  </div>
                </div>
              </form>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>Form without labels</Card.Header>
            <Card.Body>
              <form>
                <div className="form-group">
                  <Input type="text" fullWidth placeholder="Recipients" />
                </div>
                <div className="form-group">
                  <Input type="text" fullWidth placeholder="Subject" />
                </div>
                <div className="form-group">
                  <Input component="textarea" placeholder="Message" />
                </div>
                <Button type="submit" status="success">
                  Send
                </Button>
              </form>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6">
          <Card>
            <Card.Header>Basic form</Card.Header>
            <Card.Body>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="label">
                    Email Address
                  </label>
                  <Input type="email" fullWidth id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="label">
                    Password
                  </label>
                  <Input
                    type="password"
                    fullWidth
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <Checkbox>Check me out</Checkbox>
                </div>
                <Button type="submit" status="danger">
                  Submit
                </Button>
              </form>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>Block form</Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="inputFirstName" className="label">
                      First Name
                    </label>
                    <Input type="text" fullWidth id="inputFirstName" placeholder="First Name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="inputLastName" className="label">
                      Last Name
                    </label>
                    <Input type="text" fullWidth id="inputLastName" placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="inputEmail" className="label">
                      Email
                    </label>
                    <Input type="email" fullWidth id="inputEmail" placeholder="Email" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="inputWebsite" className="label">
                      Website
                    </label>
                    <Input type="text" fullWidth id="inputWebsite" placeholder="Website" />
                  </div>
                </div>
              </div>
              <Button type="submit">Submit</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Header>Horizontal form</Card.Header>
            <Card.Body>
              <form className="form-horizontal">
                <div className="form-group row">
                  <label htmlFor="inputEmail3" className="label col-sm-3 form-control-label">
                    Email
                  </label>
                  <div className="col-sm-9">
                    <Input type="email" fullWidth id="inputEmail3" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword3" className="label col-sm-3 form-control-label">
                    Password
                  </label>
                  <div className="col-sm-9">
                    <Input type="password" fullWidth id="inputPassword3" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-sm-3 col-sm-9">
                    <div className="checkbox">
                      <Checkbox>Remember me</Checkbox>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-sm-3 col-sm-9">
                    <Button type="submit" status="warning">
                      Sign in
                    </Button>
                  </div>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
