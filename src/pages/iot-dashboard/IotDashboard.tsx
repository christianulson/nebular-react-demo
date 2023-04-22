import React from 'react';
import { Contacts } from './contacts/Contacts';
import { Electricity } from './electricity/Electricity';
import { Kitten } from './kitten/Kitten';
import { Rooms } from './rooms/Rooms';
import { SecurityCamera } from './security-cameras/SecurityCamera';
import { Solar } from './solar/Solar';
import { StatusCard } from './status-card/StatusCard';
import { Temperature } from './temperature/Temperature';
import { Traffic } from './traffic/Traffic';
import { Weather } from './weather/Weather';

export function IotDashboard() {
  const statusCards = [
    {
      title: 'Light',
      iconClass: 'nb-lightbulb',
      type: 'primary'
    },
    {
      title: 'Roller Shades',
      iconClass: 'nb-roller-shades',
      type: 'success'
    },
    {
      title: 'Wireless Audio',
      iconClass: 'nb-audio',
      type: 'info'
    },
    {
      title: 'Coffee Maker',
      iconClass: 'nb-coffee-maker',
      type: 'warning'
    }
  ];

  return (
    <>
      <div className="row">
        {statusCards.map((card, index) => (
          <div className="col-xxxl-3 col-md-6" key={`status-card-${index}`}>
            <StatusCard title={card.title} type={card.type}>
              <i className={card.iconClass} />
            </StatusCard>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-xxxl-3 col-xxl-4 col-lg-5 col-md-6">
          <Temperature />
        </div>
        <div className="col-xxxl-9 col-xxl-8 col-lg-7 col-md-6">
          <Electricity />
        </div>
      </div>

      <div className="row">
        <div className="col-xxxl-9 col-xl-12">
          <Rooms />
        </div>
        <div className="col-xxxl-3 col-xxl-4 col-lg-7 col-md-6">
          <Contacts />
        </div>
        <div className="col-xxxl-3 col-xxl-4 col-lg-5 col-md-6">
          <Solar />
          <Kitten />
        </div>
        <div className="col-xxxl-3 col-xxl-4 col-md-5">
          <Traffic />
          <Weather />
        </div>
        <div className="col-xxxl-6 col-xxl-12 col-md-7">
          <SecurityCamera />
        </div>
      </div>
    </>
  );
}
