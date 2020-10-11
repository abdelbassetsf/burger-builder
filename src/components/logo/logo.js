import React from 'react';
import classes from './logo.module.css';
import LogoBurger from '../../assets/images/burger-logo.png';

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={LogoBurger} alt='My Burger' />
  </div>
);

export default Logo;
