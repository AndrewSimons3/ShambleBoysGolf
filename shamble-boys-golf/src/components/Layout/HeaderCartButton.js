import React, { useContext } from 'react';
import CartContext from '../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.products.reduce((curNumber, prod) => {
    return curNumber + prod.amount
  }, 0)

	return (
		<button className={classes.button} onClick={props.onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
