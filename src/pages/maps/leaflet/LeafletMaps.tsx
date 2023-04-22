import { Card } from '@nebular-react/core';
import React from 'react';
import { MapContainer } from 'react-leaflet';
import * as L from 'leaflet';
import useStyles from './LeafletMaps.styles';

export function LeafletMapsDemo() {
  const { classes, cx } = useStyles();

  return (
    <Card className={cx(classes.root)}>
      <Card.Header>Leaflet Maps</Card.Header>
      <Card.Body>
        <MapContainer
          layers={[
            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 18,
              attribution: '...'
            })
          ]}
          zoom={5}
          center={L.latLng({ lat: 38.991709, lng: -76.886109 })}
        />
      </Card.Body>
    </Card>
  );
}
