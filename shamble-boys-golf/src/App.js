import './App.css';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Cart from './components/Cart/Cart';
import { useState, Fragment } from 'react';
import Products from './components/Products/Products';

function App() {
	const [showCart, setShowCart] = useState(false);

	const showCartHandler = () => {
		setShowCart(true);
	};

	const hideCartHandler = () => {
		setShowCart(false);
	};

	return (
		<Fragment>
			{showCart && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
      <Main />
      <Products />
		</Fragment>
	);
}

export default App;
