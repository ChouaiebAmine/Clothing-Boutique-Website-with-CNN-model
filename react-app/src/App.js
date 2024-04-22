import React, { useState } from 'react';
import Header from './Header';
import DisplayMode from './display_mode';
import Footer from './footer';
import SearchBar from './searchbar';
import ImageUpload from './ImageUpload';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
<<<<<<< HEAD:src/App.js
      <Header theme = {theme}/>
      <SearchBar theme={theme} />
      <ImageUpload />
=======
      <Header /> 
      <SearchBar theme ={theme}/> 
      <div className="theme-toggler-container">
        <DisplayMode theme={theme} toggleTheme={toggleTheme} />
      </div>
>>>>>>> 1bc59e173013dd97deec7c6a10cba75619a68577:react-app/src/App.js
      <div className={`app ${theme}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
            
              <div className="theme-toggler-container ">
                
                <DisplayMode theme={theme} toggleTheme={toggleTheme} />
              </div>
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

