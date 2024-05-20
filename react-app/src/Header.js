import React, { useEffect, useState } from 'react';
import './Header.css';


const Header = ({ theme }) => {
  const [isBlackFriday, setIsBlackFriday] = useState(false);

  useEffect(() => {
    // Check if it s Friday
    const today = new Date();
    const isFriday = today.getDay() === 5; // Friday is represented by 5 

 
    const mode = localStorage.getItem('theme');
    const isDarkMode = mode === 'dark';

    const isBlackFriday = isFriday && isDarkMode;
    setIsBlackFriday(isBlackFriday);
  }, [theme]);

  const handleEasterEggClick = () => {
    alert('50% off Black Friday');
  };

  return (
    <section className={`wrapper ${theme === 'light' ? 'light' : 'dark'}`}>
      <div className="header">
        <video autoPlay loop muted className="header__video">
          <source src="./FashionVid.mp4" type="video/mp4" />
          Video
        </video>
        <div className="header__buttons">
          <a href = "/App.js" target='_blank'>
          <button className="header__button">MainPage</button>
          </a>
          <button className="header__button">Login</button>
        </div>
        <div className="content">
        
          {isBlackFriday && (
            <div className="easter-egg" onClick={handleEasterEggClick}>
              🎉 Easter Egg! Click here for a surprise!
            </div>
          )}
          <p>Scroll down to explore </p>
        </div>
      </div>
    </section>
  );
};

export default Header;