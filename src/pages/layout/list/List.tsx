import { Card, List, User } from '@nebular-react/core';
import React from 'react';
import useStyles from './List.styles';

export function ListDemo() {
  const fruits: string[] = [
    'Lemons',
    'Raspberries',
    'Strawberries',
    'Blackberries',
    'Kiwis',
    'Grapefruit',
    'Avocado',
    'Watermelon',
    'Cantaloupe',
    'Oranges',
    'Peaches'
  ];

  const users: { name: string; title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' }
  ];

  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, 'row')}>
      <div className="col-md-12 col-lg-6 col-xxxl-6">
        <Card className="list-card">
          <Card.Header>Some Fruits</Card.Header>
          <Card.Body>
            <List>
              {fruits.map((fruit, index) => (
                <List.Item key={`fruit-${index}`}>{fruit}</List.Item>
              ))}
            </List>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-6">
        <Card className="list-card" size="small">
          <Card.Header>Users</Card.Header>
          <List>
            {users.map((user, index) => (
              <List.Item key={`user-${index}`}>
                <User name={user.name} title={user.title} />
              </List.Item>
            ))}
          </List>
        </Card>
      </div>
    </div>
  );
}
