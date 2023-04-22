import { Card, useNebularTheme } from '@nebular-react/core';
import { usePlatform } from '@nebular-react/hooks';
import { uniqueId } from 'lodash';
import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useStyles from './RoomSelector.styles';

export function RoomSelector() {
  const [selectedRoom, setSelectedRoom] = useState<string>();
  const location = useLocation();
  const { EDGE, TRIDENT, FIREFOX } = usePlatform();
  const theme = useNebularTheme();
  const { classes, cx } = useStyles();

  const roomSvg = {
    borders: [
      {
        d: 'M186.21,130.05H216.37V160H186.21Z'
      }
    ],
    stokedAreas: [
      { d: 'M562.71,225V354h-290V319H418.37a6.09,6.09,0,0,0,6.09-6.09V225Z' },
      { d: 'M8.09,130V347.91A6.09,6.09,0,0,0,14.18,354h54V130Z' },
      { d: 'M216.37,49.82H358.8V92.5H216.37Z' }
    ],
    rooms: [
      {
        id: '0',
        name: { text: 'Kitchen', x: 142, y: 240.8 },
        area: {
          d: 'M68.18,130V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V160H186.21V130Z'
        },
        border: {
          d:
            'M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,' +
            '130H186.21V160H218.5'
        }
      },
      {
        id: '1',
        name: { text: 'Bedroom', x: 109, y: 66 },
        area: {
          d:
            'M152.71,130h63.66V8.09A6.09,6.09,0,0,0,210.27,2H8.09A6.09,6.09,0,0,0,2,8.09V123.95A6.09,' +
            '6.09,0,0,0,8.09,130H96Z'
        },
        border: {
          d:
            'M152.71,130h63.66V8.09A6.09,6.09,0,0,0,210.27,2H8.09A6.09,6.09,0,0,0,2,8.09V123.95A6.09' +
            ',6.09,0,0,0,8.09,130H96'
        }
      },
      {
        id: '2',
        name: { text: 'Living Room', x: 468, y: 134 },
        area: {
          d:
            'M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09' +
            ',6.09,0,0,1-6.09,6.09h-212Z'
        },
        border: {
          d:
            'M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09' +
            ',6.09,0,0,1-6.09,6.09h-212'
        }
      },
      {
        id: '3',
        name: { text: 'Hallway', x: 320, y: 273 },
        area: { d: 'M216.37,354V92.5H358.8V225H424.39V319H272.71V354Z' },
        border: {
          d:
            'M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,' +
            '6.09,0,0,1,-6.09,6.09H272.71V356'
        }
      }
    ]
  };

  const sortedRooms = useMemo(
    () =>
      roomSvg.rooms.slice(0).sort((a, b) => {
        if (a.id === selectedRoom) {
          return 1;
        }
        if (b.id === selectedRoom) {
          return -1;
        }
        return 0;
      }),
    [selectedRoom]
  );

  const getUrlPath = (id: string) => `url(${location.pathname}${id})`;

  const selectRoom = (roomNumber: string) => {
    setSelectedRoom(roomNumber);
  };

  return (
    <div
      className={cx(classes.root, 'room-selector-container', {
        'dark-background': theme.isDarkTheme
      })}
    >
      <Card>
        <Card.Header>Room Management</Card.Header>
        <div className="room-selector">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-20 -20 618.88 407.99"
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <filter id="f2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur result="blurOut" in="StrokePaint" stdDeviation="3" />
              </filter>

              <pattern
                id="New_Pattern_Swatch_1"
                data-name="New Pattern Swatch 1"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
                viewBox="0 0 60 60"
              >
                <line className="stroke-pattern" x1="-113.26" y1="123.26" x2="3.26" y2="6.74" />
                <line className="stroke-pattern" x1="-103.26" y1="133.26" x2="13.26" y2="16.74" />
                <line className="stroke-pattern" x1="-93.26" y1="143.26" x2="23.26" y2="26.74" />
                <line className="stroke-pattern" x1="-83.26" y1="153.26" x2="33.26" y2="36.74" />
                <line className="stroke-pattern" x1="-73.26" y1="163.26" x2="43.26" y2="46.74" />
                <line className="stroke-pattern" x1="-63.26" y1="173.26" x2="53.26" y2="56.74" />
                <line className="stroke-pattern" x1="-53.26" y1="123.26" x2="63.26" y2="6.74" />
                <line className="stroke-pattern" x1="-43.26" y1="133.26" x2="73.26" y2="16.74" />
                <line className="stroke-pattern" x1="-33.26" y1="143.26" x2="83.26" y2="26.74" />
                <line className="stroke-pattern" x1="-23.26" y1="153.26" x2="93.26" y2="36.74" />
                <line className="stroke-pattern" x1="-13.26" y1="163.26" x2="103.26" y2="46.74" />
                <line className="stroke-pattern" x1="-3.26" y1="173.26" x2="113.26" y2="56.74" />
                <line className="stroke-pattern" x1="6.74" y1="123.26" x2="123.26" y2="6.74" />
                <line className="stroke-pattern" x1="16.74" y1="133.26" x2="133.26" y2="16.74" />
                <line className="stroke-pattern" x1="26.74" y1="143.26" x2="143.26" y2="26.74" />
                <line className="stroke-pattern" x1="36.74" y1="153.26" x2="153.26" y2="36.74" />
                <line className="stroke-pattern" x1="46.74" y1="163.26" x2="163.26" y2="46.74" />
                <line className="stroke-pattern" x1="56.74" y1="173.26" x2="173.26" y2="56.74" />
                <line className="stroke-pattern" x1="-113.26" y1="63.26" x2="3.26" y2="-53.26" />
                <line className="stroke-pattern" x1="-103.26" y1="73.26" x2="13.26" y2="-43.26" />
                <line className="stroke-pattern" x1="-93.26" y1="83.26" x2="23.26" y2="-33.26" />
                <line className="stroke-pattern" x1="-83.26" y1="93.26" x2="33.26" y2="-23.26" />
                <line className="stroke-pattern" x1="-73.26" y1="103.26" x2="43.26" y2="-13.26" />
                <line className="stroke-pattern" x1="-63.26" y1="113.26" x2="53.26" y2="-3.26" />
                <line className="stroke-pattern" x1="-53.26" y1="63.26" x2="63.26" y2="-53.26" />
                <line className="stroke-pattern" x1="-43.26" y1="73.26" x2="73.26" y2="-43.26" />
                <line className="stroke-pattern" x1="-33.26" y1="83.26" x2="83.26" y2="-33.26" />
                <line className="stroke-pattern" x1="-23.26" y1="93.26" x2="93.26" y2="-23.26" />
                <line className="stroke-pattern" x1="-13.26" y1="103.26" x2="103.26" y2="-13.26" />
                <line className="stroke-pattern" x1="-3.26" y1="113.26" x2="113.26" y2="-3.26" />
                <line className="stroke-pattern" x1="6.74" y1="63.26" x2="123.26" y2="-53.26" />
                <line className="stroke-pattern" x1="16.74" y1="73.26" x2="133.26" y2="-43.26" />
                <line className="stroke-pattern" x1="26.74" y1="83.26" x2="143.26" y2="-33.26" />
                <line className="stroke-pattern" x1="36.74" y1="93.26" x2="153.26" y2="-23.26" />
                <line className="stroke-pattern" x1="46.74" y1="103.26" x2="163.26" y2="-13.26" />
                <line className="stroke-pattern" x1="56.74" y1="113.26" x2="173.26" y2="-3.26" />
                <line className="stroke-pattern" x1="-113.26" y1="3.26" x2="3.26" y2="-113.26" />
                <line className="stroke-pattern" x1="-103.26" y1="13.26" x2="13.26" y2="-103.26" />
                <line className="stroke-pattern" x1="-93.26" y1="23.26" x2="23.26" y2="-93.26" />
                <line className="stroke-pattern" x1="-83.26" y1="33.26" x2="33.26" y2="-83.26" />
                <line className="stroke-pattern" x1="-73.26" y1="43.26" x2="43.26" y2="-73.26" />
                <line className="stroke-pattern" x1="-63.26" y1="53.26" x2="53.26" y2="-63.26" />
                <line className="stroke-pattern" x1="-53.26" y1="3.26" x2="63.26" y2="-113.26" />
                <line className="stroke-pattern" x1="-43.26" y1="13.26" x2="73.26" y2="-103.26" />
                <line className="stroke-pattern" x1="-33.26" y1="23.26" x2="83.26" y2="-93.26" />
                <line className="stroke-pattern" x1="-23.26" y1="33.26" x2="93.26" y2="-83.26" />
                <line className="stroke-pattern" x1="-13.26" y1="43.26" x2="103.26" y2="-73.26" />
                <line className="stroke-pattern" x1="-3.26" y1="53.26" x2="113.26" y2="-63.26" />
                <line className="stroke-pattern" x1="6.74" y1="3.26" x2="123.26" y2="-113.26" />
                <line className="stroke-pattern" x1="16.74" y1="13.26" x2="133.26" y2="-103.26" />
                <line className="stroke-pattern" x1="26.74" y1="23.26" x2="143.26" y2="-93.26" />
                <line className="stroke-pattern" x1="36.74" y1="33.26" x2="153.26" y2="-83.26" />
                <line className="stroke-pattern" x1="46.74" y1="43.26" x2="163.26" y2="-73.26" />
                <line className="stroke-pattern" x1="56.74" y1="53.26" x2="173.26" y2="-63.26" />
              </pattern>
            </defs>

            <g>
              {roomSvg.borders.map((border) => (
                <path className="room-border" d={border.d} key={uniqueId('room-border-')} />
              ))}
            </g>

            <g>
              {roomSvg.stokedAreas.map((strokedArea) => (
                <path
                  className="stroked-element"
                  fill={getUrlPath('#New_Pattern_Swatch_1')}
                  d={strokedArea.d}
                  key={uniqueId('stroked-element-')}
                />
              ))}
            </g>

            {sortedRooms.map((room) => (
              <g
                id={room.id}
                className={cx({ 'selected-room': selectedRoom === room.id })}
                key={uniqueId('room-')}
              >
                <path
                  className="room-bg"
                  onClick={() => selectRoom(room.id)}
                  d={room.area.d}
                  style={{ filter: EDGE || TRIDENT || FIREFOX ? 'inherit' : '' }}
                />
                <path className="room-border" d={room.border.d} />
                <path
                  className="room-border room-border-glow"
                  d={room.border.d}
                  style={{ filter: EDGE || TRIDENT || FIREFOX ? 'inherit' : '' }}
                />
                <text
                  className="room-text"
                  textAnchor="middle"
                  onClick={() => selectRoom(room.id)}
                  x={room.name.x}
                  y={room.name.y}
                >
                  {room.name.text}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </Card>
    </div>
  );
}
