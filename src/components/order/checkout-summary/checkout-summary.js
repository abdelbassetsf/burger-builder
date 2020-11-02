import React from 'react';
import Burger from '../../burger/burger';
import Button from '../../UI/button/button';
import classes from './checkout-summary.module.css';

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Bon Appetit!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.checkoutCancelled} btnType='Danger'>
        CANCEL
      </Button>
      <Button clicked={props.checkoutContinued} btnType='Success'>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
