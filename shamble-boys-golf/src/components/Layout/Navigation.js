import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
		<ul className={classes.nav}>
			<li>Home</li>
			<li>About</li>
			<li>Products</li>
			<li>Cart</li>
		</ul>
	);
}

export default Navigation