import React, { useState, useEffect } from 'react';
/**import Header from './Header';
import DisplayMode from './display_mode';
import Footer from './footer';
import SearchBar from './searchbar';
import ImageUpload from './ImageUpload';*/
import './App.css';
import axios from 'axios'

const App = () => {
  //const [theme, setTheme] = useState('light');

  /*const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };*/
  const [data, setData] = useState(0)
  const fetchAPI=async()=>{
    const res=await axios.get("http://127.0.0.1:5000")
    console.log(res.data.test);
  };
  useEffect(()=>{
    fetchAPI();
  },[]);
  /*useEffect(() => {
    axios.get("http://127.0.0.1:5000").then(
      res => {setData(res.data.data);}
      )
    },[]);*/
  return (
    /*<div>
      <Header theme={theme} />
      <SearchBar theme={theme} />
      <ImageUpload theme={theme} />
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
    </div>*/
    <div>

      {(typeof data.test )=== 'undefined' ? (
        <p>wait</p>
      ) : (
        data.test.map((wa, i) => (
          <p key={i}>{wa}</p>
        ))
      )}
    </div>
  );
};

export default App;

