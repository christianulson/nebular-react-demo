import {
  Action,
  Actions,
  ContextMenu,
  Icon,
  Menu,
  Search,
  Select,
  User,
  MenuItem,
  Option,
  changeTheme,
  Toggle,
  changeDirection
} from '@nebular-react/core';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AllThemes } from '../../themes/AllThemes';
import useStyles from './Header.styles';

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  const themes: Option[] = [
    { type: 'option', label: 'Light', value: 'light' },
    { type: 'option', label: 'Cosmic', value: 'cosmic' },
    { type: 'option', label: 'Corporate', value: 'corporate' },
    { type: 'option', label: 'Dark', value: 'dark' }
  ];
  const { classes, cx } = useStyles();
  const userMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSelectTheme = (selected: Option) => {
    const { theme } = AllThemes.find((t) => t.name === selected.value);
    changeTheme(theme);
  };

  const handleChangeDirection = (checked: boolean) => {
    changeDirection(checked ? 'rtl' : 'ltr');
  };

  return (
    <div className={cx(classes.root)}>
      <div className="header-container">
        <div className="logo-container">
          <a
            href="#"
            className="sidebar-toggle"
            aria-label="Toggle navigation"
            title="Toggle navigation"
            onClick={toggleSidebar}
          >
            <Icon icon="menu-2-outline" />
          </a>
          <a className="logo" href="#">
            Nebular React Demo
          </a>
        </div>
        <div className="theme-select">
          <Select
            options={themes}
            status="primary"
            defaultSelected={{ type: 'option', label: 'Light', value: 'light' }}
            onSelect={handleSelectTheme}
          />
        </div>
        <div className="dir-toggle">
          <Toggle onCheckedChange={handleChangeDirection}>RTL</Toggle>
        </div>
      </div>
      <div className="header-container">
        <Actions size="small">
          <Action component="div" className="control-item">
            <Search type="rotate-layout" />
          </Action>
          <Action
            className="control-item"
            aria-label="Messages"
            title="Messages"
            icon={<Icon icon="email-outline" />}
          />
          <Action
            className="control-item"
            aria-label="Notifications"
            title="Notifications"
            icon={<Icon icon="bell-outline" />}
          />
          <Action
            className="control-item"
            aria-label="Desktop mode"
            title="Desktop mode"
            icon={<Icon icon="monitor-outline" />}
            onClick={() => navigate('/desktop')}
          />
          <Action className="user-action">
            <User ref={userMenuRef} />
            <ContextMenu triggerRef={userMenuRef}>
              <Menu>
                <MenuItem id="Profile" title="Profile" />
                <MenuItem id="Logout" title="Log out" />
              </Menu>
            </ContextMenu>
          </Action>
        </Actions>
      </div>
    </div>
  );
}
