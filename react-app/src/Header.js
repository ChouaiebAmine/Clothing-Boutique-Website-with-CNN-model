import React from 'react';
import './Header.css';

const Header = ({ theme }) => {
  return (
    <section className={`wrapper ${theme === 'light' ? 'light' : 'dark'}`}>
      <div className="top">Fashion</div>
      <div className="bottom" aria-hidden="true">Fashion</div>
    </section>
  );
};

export default Header;