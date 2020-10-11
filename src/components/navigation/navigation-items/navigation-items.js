import React from 'react';
import NavigationItem from './navigation-item/navigation-item';
import classes from './navigation-items.module.css';

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
