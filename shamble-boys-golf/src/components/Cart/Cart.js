import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  return (
    <Modal>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$23.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
      </div>
    </Modal>
  )
}

export default Cart;