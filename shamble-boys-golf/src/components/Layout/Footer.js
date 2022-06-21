import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={classes.contact}>
        <h2>Contact</h2>
        <span>Shamble Boys Golf</span>
        <p>5350 Burnet Rd, Austin, TX 78756</p>
        <p>512-944-9351</p>
        <p>simdrew07@gmail.com</p>
      </div>
      <div className={classes.social}>
        <h4>Stay Connected</h4>
        <span>Facebook</span>
        <span>Instagram</span>
        <span>Twitter</span>
      </div>
      <div className={classes.message}>
        <form>
          <label>Full Name</label>
          <input type="text" name="name"/>
          <label>Email</label>
          <input type="text" id="email" />
          <label>Your Message...</label>
          <textarea name="comment"/>
        </form>
      </div>
    </div>
  )
}

export default Footer;