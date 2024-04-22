import React, { useState } from 'react';
import Header from './Header';
import DisplayMode from './display_mode';
import Footer from './footer';
import SearchBar from './searchbar'
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <Header /> 
      <SearchBar theme ={theme}/> 
      <div className="theme-toggler-container">
        <DisplayMode theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div className={`app ${theme}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              {/* Content goes here */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
