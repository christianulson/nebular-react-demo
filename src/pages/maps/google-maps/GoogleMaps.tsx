import { Card } from '@nebular-react/core';
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import useStyles from './GoogleMaps.styles';

function _GoogleMapsDemo(props) {
  const { classes, cx } = useStyles();

  return (
    <Card className={cx(classes.root)} size="large">
      <Card.Header>Google Maps</Card.Header>
      <Card.Body>
        <Map
          zoom={8}
          google={props.google}
          initialCenter={{ lat: 51.678418, lng: 7.809007 }}
          style={{ width: '100%', height: '32.85rem' }}
          onReady={(mapProps, map) => {
            const marker = new google.maps.Marker({
              position: new google.maps.LatLng(51.778418, 7.909007),
              title: 'Hello World!'
            });

            marker.setMap(map);
          }}
        />
      </Card.Body>
    </Card>
  );
}

export default GoogleApiWrapper({
  apiKey: 'your-api-key-here'
})(_GoogleMapsDemo);
