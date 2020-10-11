import React from 'react';
import classes from './toolbar.module.css';
import Logo from '../../logo/logo';
import NavigationItems from '../navigation-items/navigation-items';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
