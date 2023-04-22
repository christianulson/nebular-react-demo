import { Badge, Card, Icon, Tabset } from '@nebular-react/core';
import React from 'react';

export function TabsDemo() {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <Card size="small">
          <Tabset>
            <Tabset.Tab title="Simple Tab #1">
              <p>
                In 1975, the first general purpose home automation network technology,{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/X10_(industry_standard)"
                  title="X10 (industry standard)"
                  rel="noreferrer"
                >
                  X10
                </a>
                , was developed. It is a communication protocol for electronic devices. It primarily
                uses{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Electric_power_transmission"
                  title="Electric power transmission"
                  rel="noreferrer"
                >
                  electric power transmission
                </a>{' '}
                wiring for signalling and control, where the signals involve brief{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Radio_frequency"
                  title="Radio frequency"
                  rel="noreferrer"
                >
                  radio frequency
                </a>{' '}
                bursts of{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Digital_data"
                  title="Digital data"
                  rel="noreferrer"
                >
                  digital data
                </a>
                , and remains the most widely available.
                <sup id="cite_ref-8" className="reference">
                  <a target="_blank" href="https://en.wikipedia.org#cite_note-8" rel="noreferrer">
                    [8]
                  </a>
                </sup>{' '}
                By 1978, X10 products included a 16 channel command console, a lamp module, and an
                appliance module. Soon after came the wall switch module and the first X10 timer.
              </p>
            </Tabset.Tab>
            <Tabset.Tab title="Simple Tab #2">
              <span>Content #2</span>
            </Tabset.Tab>
            <Tabset.Tab title="Simple Tab #2">
              <span>Content #3</span>
            </Tabset.Tab>
          </Tabset>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card size="small">
          <Tabset>
            <Tabset.Tab title="Users" badge={<Badge text="99+" status="danger" />}>
              <p>
                List of <strong>users</strong>
              </p>
            </Tabset.Tab>
            <Tabset.Tab
              title="Orders"
              badge={<Badge text="12" position="bottom right" status="warning" />}
            >
              <p>
                List of <strong>orders</strong>
              </p>
            </Tabset.Tab>
            <Tabset.Tab icon={<Icon icon="email-outline" />}>
              <p>
                List of <strong>transactions</strong>
              </p>
            </Tabset.Tab>
          </Tabset>
        </Card>
      </div>

      <div className="col-12">
        <Card size="small">
          <Tabset fullWidth>
            <Tabset.Tab title="Full width tab #1">
              <p>
                <b>Home automation</b> or <b>smart home</b>
                <sup id="cite_ref-Smart_Home_1-0" className="reference">
                  <a
                    target="_blank"
                    href="https://en.wikipedia.org#cite_note-Smart_Home-1"
                    rel="noreferrer"
                  >
                    [1]
                  </a>
                </sup>{' '}
                (also known as <b>domotics</b>
                <sup id="cite_ref-t3_2-0" className="reference">
                  <a
                    target="_blank"
                    href="https://en.wikipedia.org#cite_note-t3-2"
                    rel="noreferrer"
                  >
                    [2]
                  </a>
                </sup>
                ) is{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Building_automation"
                  title="Building automation"
                  rel="noreferrer"
                >
                  building automation
                </a>{' '}
                for the home. It involves the control and automation of lighting, heating (such as{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Smart_thermostat"
                  title="Smart thermostat"
                  rel="noreferrer"
                >
                  smart thermostats
                </a>
                ), ventilation, air conditioning (
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/HVAC"
                  title="HVAC"
                  rel="noreferrer"
                >
                  HVAC
                </a>
                ), and security, as well as{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Home_appliance"
                  title="Home appliance"
                  rel="noreferrer"
                >
                  home appliances
                </a>{' '}
                such as washer/dryers, ovens or refrigerators/freezers.{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Wi-Fi"
                  title="Wi-Fi"
                  rel="noreferrer"
                >
                  Wi-Fi
                </a>{' '}
                is often used for remote monitoring and control. Home devices, when remotely
                monitored and controlled via the Internet, are an important constituent of the{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Internet_of_Things"
                  className="mw-redirect"
                  title="Internet of Things"
                  rel="noreferrer"
                >
                  Internet of Things
                </a>
                . Modern systems generally consist of switches and sensors connected to a central
                hub sometimes called a &quot;gateway&quot; from which the system is controlled with
                a{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/User_interface"
                  title="User interface"
                  rel="noreferrer"
                >
                  user interface
                </a>{' '}
                that is interacted either with a wall-mounted terminal, mobile phone software,{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Tablet_computer"
                  title="Tablet computer"
                  rel="noreferrer"
                >
                  tablet computer
                </a>{' '}
                or a web interface, often but not always via Internet cloud services.
              </p>
              <p>
                While there are many competing vendors, there are very few worldwide accepted
                industry standards and the smart home space is heavily fragmented.
                <sup id="cite_ref-3" className="reference">
                  <a target="_blank" href="https://en.wikipedia.org#cite_note-3" rel="noreferrer">
                    [3]
                  </a>
                </sup>{' '}
                Popular{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Communications_protocol"
                  title="Communications protocol"
                  rel="noreferrer"
                >
                  communications protocol
                </a>{' '}
                for products include{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/X10_(industry_standard)"
                  title="X10 (industry standard)"
                  rel="noreferrer"
                >
                  X10
                </a>
                ,{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Ethernet"
                  title="Ethernet"
                  rel="noreferrer"
                >
                  Ethernet
                </a>
                ,{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/RS-485"
                  title="RS-485"
                  rel="noreferrer"
                >
                  RS-485
                </a>
                ,{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/6LoWPAN"
                  title="6LoWPAN"
                  rel="noreferrer"
                >
                  6LoWPAN
                </a>
                ,{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Bluetooth_low_energy"
                  className="mw-redirect"
                  title="Bluetooth low energy"
                  rel="noreferrer"
                >
                  Bluetooth LE (BLE)
                </a>
                ,{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/ZigBee"
                  className="mw-redirect"
                  title="ZigBee"
                  rel="noreferrer"
                >
                  ZigBee
                </a>{' '}
                and{' '}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Z-Wave"
                  title="Z-Wave"
                  rel="noreferrer"
                >
                  Z-Wave
                </a>
                , or other proprietary protocols all of which are incompatible with each other.
                <sup id="cite_ref-crhomephone_4-0" className="reference">
                  <a
                    target="_blank"
                    href="https://en.wikipedia.org#cite_note-crhomephone-4"
                    rel="noreferrer"
                  >
                    [4]
                  </a>
                </sup>{' '}
                Manufacturers often prevent independent implementations by withholding documentation
                and by litigation.
                <sup id="cite_ref-5" className="reference">
                  <a target="_blank" href="https://en.wikipedia.org#cite_note-5" rel="noreferrer">
                    [5]
                  </a>
                </sup>
              </p>
            </Tabset.Tab>
            <Tabset.Tab title="Full width tab #2">
              <span>Content #2</span>
            </Tabset.Tab>
            <Tabset.Tab title="Full width tab #3">
              <span>Content #3</span>
            </Tabset.Tab>
          </Tabset>
        </Card>
      </div>
    </div>
  );
}
