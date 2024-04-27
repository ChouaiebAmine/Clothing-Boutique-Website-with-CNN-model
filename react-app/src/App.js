import React, { useState, useEffect } from 'react';
/**import Header from './Header';
import DisplayMode from './display_mode';
import Footer from './footer';
import SearchBar from './searchbar';
import ImageUpload from './ImageUpload';*/
import './App.css';
import axios from 'axios'

function App() {
  //const [theme, setTheme] = useState('light');

  /*const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };*/
  const [data, setData] = useState(0)
  const [array, setArray] = useState([]);


  const fetchAPI = async () => {
    const res = await axios.get("http://127.0.0.1:5000")
    console.log(res.data.data);
    setArray(res.data.data);
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    /*<div>
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
    </div>*/
    <div>
      {array.map((x, i) => (
        <p>{x}</p>
      ))
      }
      <img src={path}/>
    </div>
  );
};

export default App;