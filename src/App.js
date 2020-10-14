import React from 'react';
import Layout from './hoc/layout/layout';
import BurgerBuilder from './containers/burger-builder/burger-builder';
import './App.css';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
