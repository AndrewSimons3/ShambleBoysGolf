import './App.css';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
	const [showCart, setShowCart] = useState(false);

	const showCartHandler = () => {
		setShowCart(true);
	};

	const hideCartHandler = () => {
		setShowCart(false);
	};

	return (
		<div className='App'>
			{showCart && <Cart onHideCart={hideCartHandler} />}

			<Header onShowCart={showCartHandler} />
			<Main />
		</div>
	);
}

export default App;
