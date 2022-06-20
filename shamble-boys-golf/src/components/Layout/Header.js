import React from 'react';
import Navigation from './Navigation';
import classes from './Header.module.css';

const Header = (props) => {
  return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<span className={classes.shamble}>Shamble</span>
				<span className={classes.boys}>Boys</span>
				<span className={classes.golf}>Golf</span>
			</div>
      <Navigation onShowCart={props.onShowCart} />
		</header>
	);
};

export default Header;
