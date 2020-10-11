import React from 'react';
import classes from './modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../backdrop/backdrop';

const Modal = (props) => (
  <Aux>
    <Backdrop clicked={props.modalClosed} show={props.show} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? 1 : 0,
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default Modal;
