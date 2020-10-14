import React from "react";
import BuildControl from "./build-control/build-control";
import classes from "./build-controls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Lamb", type: "lamb" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      The Current Price: <strong>{props.price.toFixed(2)} $</strong>
    </p>
    {controls.map(ctl => (
      <BuildControl
        key={ctl.label}
        label={ctl.label}
        added={() => props.ingredientAdded(ctl.type)}
        removed={() => props.ingredientRemoved(ctl.type)}
        disabledInfo={props.disabledInfo[ctl.type]}
      />
    ))}
    <button
      onClick={props.ordered}
      className={classes.OrderButton}
      disabled={!props.purchasable}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
