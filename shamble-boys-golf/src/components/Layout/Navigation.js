import React from 'react';
import classes from './Navigation.module.css';
import HeaderCartButton from './HeaderCartButton';

const Navigation = (props) => {
  return (
		<ul className={classes.nav}>
			<li>Home</li>
			<li>About</li>
			<li>Products</li>
      <HeaderCartButton onShowCart={props.onShowCart} />
		</ul>
	);
}

export default Navigation