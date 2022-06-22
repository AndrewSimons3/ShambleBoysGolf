import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../store/cart-context';
import CloseIcon from './CloseIcon';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  console.log(totalAmount)
  const hasItems = cartCtx.products.length > 0;

	const cartProducts = (
		<ul className={classes['cart-items']}>
			{cartCtx.products.map((prod) => {
				return <li>{prod.name}</li>;
			})}
		</ul>
	);

	return (
		<Modal onHideCart={props.onHideCart}>
			{cartProducts}
			<div className={classes.header}>
				<h2>Cart</h2>
				<button className={classes.exitBtn}>
					<CloseIcon />
				</button>
			</div>
			<div className={classes.actions}>
				<span>{totalAmount}</span>
				<button className={classes['button--alt']} onClick={props.onHideCart}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
