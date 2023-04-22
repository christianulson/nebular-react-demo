import { Card, Icon, List, Tabset, User } from '@nebular-react/core';
import { useDateFns } from '@nebular-react/hooks';
import React from 'react';
import useStyles from './Contacts.styles';

interface User {
  name: string;
  picture: string;
}

interface Contacts {
  user: User;
  type: string;
}

interface RecentUsers extends Contacts {
  time: Date;
}

export function Contacts() {
  const { format, setHours, setMinutes } = useDateFns<Date>();

  const time: Date = new Date();
  const users = {
    nick: { name: 'Nick Jones', picture: '/images/nick.png' },
    eva: { name: 'Eva Moor', picture: '/images/eva.png' },
    jack: { name: 'Jack Williams', picture: '/images/jack.png' },
    lee: { name: 'Lee Wong', picture: '/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: '/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: '/images/kate.png' }
  };
  const types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work'
  };
  const contacts: Contacts[] = [
    { user: users.nick, type: types.mobile },
    { user: users.eva, type: types.home },
    { user: users.jack, type: types.mobile },
    { user: users.lee, type: types.mobile },
    { user: users.alan, type: types.home },
    { user: users.kate, type: types.work }
  ];
  const recentUsers: RecentUsers[] = [
    { user: users.alan, type: types.home, time: setMinutes(setHours(time, 21), 12) },
    { user: users.eva, type: types.home, time: setMinutes(setHours(time, 17), 45) },
    { user: users.nick, type: types.mobile, time: setMinutes(setHours(time, 5), 29) },
    { user: users.lee, type: types.mobile, time: setMinutes(setHours(time, 11), 24) },
    { user: users.jack, type: types.mobile, time: setMinutes(setHours(time, 10), 45) },
    { user: users.kate, type: types.work, time: setMinutes(setHours(time, 9), 42) },
    { user: users.kate, type: types.work, time: setMinutes(setHours(time, 9), 31) },
    { user: users.jack, type: types.mobile, time: setMinutes(setHours(time, 8), 0) }
  ];

  const { classes, cx } = useStyles();

  return (
    <Card size="giant" className={cx(classes.root)}>
      <Tabset fullWidth>
        <Tabset.Tab title="Contacts">
          <List>
            {contacts.map((c, index) => (
              <List.Item key={`contact-${index}`} className="contact">
                <User picture={c.user.picture} name={c.user.name} title={c.type} size="large" />
                <Icon icon="phone-outline" pack="eva" />
              </List.Item>
            ))}
          </List>
        </Tabset.Tab>

        <Tabset.Tab title="Recent">
          <List>
            {recentUsers.map((c, index) => (
              <List.Item key={`recent-contact-${index}`} className="contact">
                <User picture={c.user.picture} name={c.user.name} title={c.type} size="large" />
                <span className="caption">{format(c.time, 'h:mm A')}</span>
              </List.Item>
            ))}
          </List>
        </Tabset.Tab>
      </Tabset>
    </Card>
  );
}
