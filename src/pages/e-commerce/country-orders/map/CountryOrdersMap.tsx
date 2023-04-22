import React, { useEffect, useRef, useMemo } from 'react';
import * as L from 'leaflet';
import { MapContainer, ZoomControl } from 'react-leaflet';
import { useNebularTheme } from '@nebular-react/core';
import useStyles from './CountryOrderMap.styles';
import * as cords from './countries.geo.json';

interface CountryOrdersMapProps {
  onSelectFeature: (name: any) => void;
}

export const CountryOrdersMap = ({ onSelectFeature }: CountryOrdersMapProps) => {
  const theme = useNebularTheme();
  const { classes, cx } = useStyles();
  const layers = useRef<any>();
  const selectedCountry = useRef<any>();

  useEffect(() => {
    selectFeature(findFeatureLayerByCountryId('USA'));
  }, []);

  const onEachFeature = (feature: GeoJSON.Feature<GeoJSON.Geometry>, layer: L.Layer) => {
    layer.on({
      mouseover: (e: L.LeafletMouseEvent) => highlightFeature(e.target),
      mouseout: (e: L.LeafletMouseEvent) => moveout(e.target),
      click: (e: L.LeafletMouseEvent) => selectFeature(e.target)
    });
  };

  const createGeoJsonLayer = () =>
    L.geoJSON(cords as any, {
      style: () => ({
        weight: 1,
        fillColor: theme.variables.bg3,
        fillOpacity: 1,
        color: theme.variables.borderColor4,
        opacity: 1
      }),
      onEachFeature: (f, l) => onEachFeature(f, l)
    });

  const highlightFeature = (featureLayer: any) => {
    if (featureLayer) {
      featureLayer.setStyle({
        weight: 1,
        fillColor: theme.variables.primaryLight,
        color: theme.variables.primary
      });

      if (!L.Browser.ie && !L.Browser.opera12 && !L.Browser.edge) {
        featureLayer.bringToFront();
      }
    }
  };

  const moveout = (featureLayer: any) => {
    if (featureLayer !== selectedCountry.current) {
      resetHighlight(featureLayer);

      // When countries have common border we should highlight selected country once again
      highlightFeature(selectedCountry.current);
    }
  };

  const resetHighlight = (featureLayer: any) => {
    if (featureLayer) {
      const geoJsonLayer = layers.current[0];

      geoJsonLayer.resetStyle(featureLayer);
    }
  };

  const selectFeature = (featureLayer: any) => {
    if (featureLayer !== selectedCountry.current) {
      resetHighlight(selectedCountry.current);
      highlightFeature(featureLayer);
      selectedCountry.current = featureLayer;
      onSelectFeature(featureLayer.feature.properties.name);
    }
  };

  const findFeatureLayerByCountryId = (id: any) => {
    const _layers = layers.current[0].getLayers();
    const featureLayer = _layers.find((item: any) => item.feature.id === id);

    return featureLayer || null;
  };

  layers.current = useMemo(() => [createGeoJsonLayer()], []);

  return (
    <div className={cx(classes.root)}>
      <MapContainer
        zoom={2}
        minZoom={2}
        maxZoom={6}
        zoomControl={false}
        center={L.latLng({ lat: 38.991709, lng: -76.886109 })}
        maxBounds={
          new L.LatLngBounds(
            new L.LatLng(-89.98155760646617, -180),
            new L.LatLng(89.99346179538875, 180)
          )
        }
        maxBoundsViscosity={1.0}
        layers={layers.current[0].getLayers()}
        style={{ width: '100%', height: '100%' }}
        className="leaflet-container"
      >
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};
