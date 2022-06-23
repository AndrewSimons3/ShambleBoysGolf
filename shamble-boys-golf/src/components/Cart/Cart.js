import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../store/cart-context';
import CloseIcon from './CloseIcon';
import CartProduct from './CartProduct';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	const hasItems = cartCtx.products.length > 0;

	const cartProducts = (
		<ul className={classes['cart-items']}>
			{cartCtx.products.map((prod) => {
				return (
					<CartProduct
						key={prod.id}
						name={prod.name}
						amount={prod.amount}
						description={prod.description}
            price={prod.price}
            size={prod.size}
					/>
				);
			})}
		</ul>
	);

	return (
		<Modal onHideCart={props.onHideCart}>
			<div className={classes.header}>
				<h2>Cart</h2>
				<button className={classes.exitBtn} onClick={props.onHideCart}>
					<CloseIcon />
				</button>
			</div>
			<hr className={classes.hr} />
			<div className={classes.inner}>{cartProducts}</div>
			{hasItems && (
				<div className={classes.footer}>
					<hr className={classes['hr-2']} />
					<div className={classes.subtotal}>
						<p>Subtotal</p>
						<span>{cartProducts.price}</span>
					</div>
					<p className={classes.info}>
						Shipping, taxes, and discounts codes calculated at checkout.
					</p>
					<button className={classes.checkout}>Check Out</button>
				</div>
			)}
		</Modal>
	);
};

export default Cart;
