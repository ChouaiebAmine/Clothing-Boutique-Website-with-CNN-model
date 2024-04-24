import React, { useState, useEffect } from 'react';
import Header from './Header';
import DisplayMode from './display_mode';
import Footer from './footer';
import SearchBar from './searchbar';
import ImageUpload from './ImageUpload';
import ImageUploadForm from '.ImageUploadForm';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch("/index").then(
      res => res.json()
    ).then
      data => {
        setData(data)
    }
  },[])
  return (
    <div>
      <Header theme={theme} />
      <SearchBar theme={theme} />
      <ImageUpload theme={theme} />
      <ImageUploadForm/> {}
      <div className={`app ${theme}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">

              <div className="theme-toggler-container ">

                <DisplayMode theme={theme} toggleTheme={toggleTheme} />
              </div>
              { }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

