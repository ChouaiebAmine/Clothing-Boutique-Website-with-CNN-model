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
<<<<<<< HEAD

      <Header theme = {theme}/>
      <SearchBar theme={theme} />
      <ImageUpload theme = {theme} />
=======
      <Header theme = {theme}/>
      <SearchBar theme={theme} />
      <ImageUpload />
>>>>>>> 11f23dd8ca79327e7fdc9ead6a294ea1fbb3357e
      <div className={`app ${theme}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
            
              <div className="theme-toggler-container ">
                
                <DisplayMode theme={theme} toggleTheme={toggleTheme} />
              </div>
              {}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

