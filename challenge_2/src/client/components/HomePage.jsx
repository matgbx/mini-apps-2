import React from 'react';
import AccountCreate from './AccountCreate';

const HomePage = (props) => {
  return (
    <div className="checkoutBtn" onClick={() => props.handleClick(AccountCreate, {})}>Checkout</div>
  );
};

module.exports = HomePage;
