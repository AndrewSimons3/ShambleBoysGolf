import React, { Fragment } from 'react';
import classes from './Modal.module.css';

import ReactDOM from 'react-dom';

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const Backdrop = (props) => {
  <div className={classes.backdrop} onClick={props.onHideCart} />;
};

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
				document.getElementById('overlays')
			)}
			{ReactDOM.createPortal(<Backdrop />, document.getElementById('overlays'))}
		</Fragment>
	);
};

export default Modal;
