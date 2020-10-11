import React from 'react';
import classes from './build-control.module.css';

const BuildControl = ({ label, added, removed, disabledInfo }) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button onClick={removed} className={classes.Less} disabled={disabledInfo}>
      Less
    </button>
    <button onClick={added} className={classes.More}>
      More
    </button>
  </div>
);

export default BuildControl;
