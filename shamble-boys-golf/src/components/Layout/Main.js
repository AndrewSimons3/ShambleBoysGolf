import React from 'react';
import productImage from '../../assets/product-background.jpeg';
import classes from './Main.module.css';
import Button from '../UI/Button';

const Main = () => {
	return (
		<div className={classes.main}>
			<img
				className={classes['background-image']}
				src={productImage}
				alt='Arizona golf course'
			/>
			<Button className={classes.btn} title='Shop Now' />
		</div>
	);
};

export default Main;
