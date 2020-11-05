import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/order/checkout-summary/checkout-summary';
import { Route } from 'react-router-dom';
import ContactData from './contact-data/contact-data';

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={this.props.ingredients}
        />
        <Route
          path={`${this.props.match.url}/contact-data`}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients
});

export default connect(mapStateToProps)(Checkout);
