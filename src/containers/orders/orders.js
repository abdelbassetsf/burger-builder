import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../components/order/order';
import axios from '../../axios/axios-orders';
import WithErrorHandler from '../../hoc/wiith-error-handler/with-error-handler';
import * as actions from '../../redux/actions/index';
import Spinner from '../../components/UI/spinner/spinner';

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orders = <Spinner />;

    if (!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          price={order.price}
          ingredients={order.ingredients}
        />
      ));
    }

    return <div>{orders}</div>;
  }
}

const mapStateToProps = state => ({
  orders: state.order.orders,
  loading: state.order.loading
});

const mapDispatchTooprops = dispatch => ({
  onFetchOrders: () => dispatch(actions.fetchOrders())
});

export default connect(
  mapStateToProps,
  mapDispatchTooprops
)(WithErrorHandler(Orders, axios));
