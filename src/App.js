import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/layout/layout';
import BurgerBuilder from './containers/burger-builder/burger-builder';
import './App.css';
import Orders from './containers/orders/orders';
import Checkout from './containers/checkout/checkout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path='/' component={BurgerBuilder} />
          <Route exact path='/orders' component={Orders} />
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
