import React from 'react';
import NavigationItem from './navigation-item/navigation-item';
import classes from './navigation-items.module.css';

const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem exact link='/'>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/orders'>Orders</NavigationItem>
  </ul>
);

export default NavigationItems;
