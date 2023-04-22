import { Alert, Card } from '@nebular-react/core';
import React from 'react';

export function AlertDemo() {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Colored Alert</Card.Header>
          <Card.Body>
            <Alert status="primary">You have been successfully authenticated!</Alert>
            <Alert status="success">You have been successfully authenticated!</Alert>
            <Alert status="info">You have been successfully authenticated!</Alert>
            <Alert status="warning">You have been successfully authenticated!</Alert>
            <Alert status="danger">You have been successfully authenticated!</Alert>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Outline Alert</Card.Header>
          <Card.Body>
            <Alert outline="primary">You have been successfully authenticated!</Alert>
            <Alert outline="success">You have been successfully authenticated!</Alert>
            <Alert outline="info">You have been successfully authenticated!</Alert>
            <Alert outline="warning">You have been successfully authenticated!</Alert>
            <Alert outline="danger">You have been successfully authenticated!</Alert>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-4">
        <Card>
          <Card.Header>Accent Alert</Card.Header>
          <Card.Body>
            <Alert status="primary" accent="info">
              You have been successfully authenticated!
            </Alert>
            <Alert status="success" accent="danger">
              You have been successfully authenticated!
            </Alert>
            <Alert status="info" accent="warning">
              You have been successfully authenticated!
            </Alert>
            <Alert status="warning" accent="danger">
              You have been successfully authenticated!
            </Alert>
            <Alert status="danger" accent="primary">
              You have been successfully authenticated!
            </Alert>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
