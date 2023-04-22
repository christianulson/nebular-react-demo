import { Card, Search } from '@nebular-react/core';
import React from 'react';

export function SearchFieldsDemo() {
  return (
    <div className="row">
      <div className="col-md-6">
        <Card>
          <Card.Header>Layout Rotate Search</Card.Header>
          <Card.Body>
            <Search type="rotate-layout" />
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6">
        <Card>
          <Card.Header>Modal Zoomin Search</Card.Header>
          <Card.Body>
            <Search type="modal-zoomin" />
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6">
        <Card>
          <Card.Header>Modal Move Search</Card.Header>
          <Card.Body>
            <Search type="modal-move" />
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6">
        <Card>
          <Card.Header>Modal Drop Search</Card.Header>
          <Card.Body>
            <Search type="modal-drop" />
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6">
        <Card>
          <Card.Header>Modal Half Search</Card.Header>
          <Card.Body>
            <Search type="modal-half" />
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6">
        <Card>
          <Card.Header>Curtain Search</Card.Header>
          <Card.Body>
            <Search type="curtain" />
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6">
        <Card>
          <Card.Header>Column Curtain Search</Card.Header>
          <Card.Body>
            <Search type="column-curtain" />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
