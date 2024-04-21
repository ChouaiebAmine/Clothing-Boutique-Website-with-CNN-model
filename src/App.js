import React, { useState } from 'react';
import DisplayMode from './display_mode';
import Header from './Header'; 
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <Header /> {}
      <DisplayMode theme={theme} toggleTheme={toggleTheme} />
      {}
    </div>
  );
};

export default App;