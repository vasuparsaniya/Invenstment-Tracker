import React from 'react';
import logo from '../assets/images/investment-calculator-logo.png';
import '../assets/css/Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
