import React, { Component } from 'react';
import Order from '../../components/order/order';
import axios from '../../axios/axios-orders';
import WithErrorHandler from '../../hoc/wiith-error-handler/with-error-handler';
class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => this.setState({ loading: false }));
  }
  render() {
    return (
      <div>
        {this.state.orders.map(({ id, ...otherProps }) => (
          <Order key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default WithErrorHandler(Orders, axios);
