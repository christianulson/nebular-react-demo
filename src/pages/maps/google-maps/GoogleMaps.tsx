import { Card } from '@nebular-react/core';
import React from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import useStyles from './GoogleMaps.styles';

const center = { lat: 51.678418, lng: 7.809007 };
const markerPosition = { lat: 51.778418, lng: 7.909007 };
const mapContainerStyle = { width: '100%', height: '32.85rem' };

export default function GoogleMapsDemo() {
  const { classes, cx } = useStyles();
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: 'your-api-key-here' });

  return (
    <Card className={cx(classes.root)} size="large">
      <Card.Header>Google Maps</Card.Header>
      <Card.Body>
        {isLoaded ? (
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={8}>
            <MarkerF position={markerPosition} title="Hello World!" />
          </GoogleMap>
        ) : null}
      </Card.Body>
    </Card>
  );
}
