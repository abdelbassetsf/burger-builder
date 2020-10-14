import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/button/button';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('orederSummary');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}: </span>
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A Burger With The Following Ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.totalPrice.toFixed(2)}$</strong>
        </p>
        <p>Continue To Checkout?</p>

        <Button btnType='Danger' clicked={this.props.purchaseCanceled}>
          Cancel
        </Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
