import React from 'react';
import classes from './order.module.css';

const Order = props => {
  const ingredientsOutput = Object.keys(props.ingredients).map(igKey => {
    return (
      <span
        key={igKey}
        style={{
          textTransform: 'capitalize',
          margin: '0 8px',
          display: 'inline-block',
          border: '1px solid #ccc',
          padding: '5px'
        }}
      >
        {igKey}: ({props.ingredients[igKey]})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>

      <p>
        Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
