import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/button/button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}: </span>
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A Burger With The Following Ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.totalPrice.toFixed(2)}$</strong>
      </p>
      <p>Continue To Checkout?</p>

      <Button btnType='Danger' clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
