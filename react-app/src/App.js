import React, { useState, /*useEffect*/  } from 'react';
import Header from './Header';
import DisplayMode from './display_mode';
import Footer from './footer';
import SearchBar from './searchbar';
import ImageUpload from './ImageUpload';
import './App.css';
//import axios from 'axios'
import ClothingGallery from './ClothingGallery';


const clothingData = [
  { id: 1, imageUrl: "http://127.0.0.1:5000/image/img(1).jpg", name: 'Clothing Item 1' },
  { id: 2, imageUrl: "http://127.0.0.1:5000/image/img(2).jpg", name: 'Clothing Item 2' },
  { id: 3, imageUrl: "http://127.0.0.1:5000/image/img(3).jpg", name: 'Clothing Item 3' },
  { id: 4, imageUrl: "http://127.0.0.1:5000/image/img(4).jpg", name: 'Clothing Item 4' },
  { id: 5, imageUrl: "http://127.0.0.1:5000/image/img(5).jpg", name: 'Clothing Item 5' },
  { id: 6, imageUrl: "http://127.0.0.1:5000/image/img(6).jpg", name: 'Clothing Item 6' },
  { id: 7, imageUrl: "http://127.0.0.1:5000/image/img(7).jpg", name: 'Clothing Item 7' },
  { id: 8, imageUrl: "http://127.0.0.1:5000/image/img(8).jpg", name: 'Clothing Item 8' },
  { id: 9, imageUrl: "http://127.0.0.1:5000/image/img(9).jpg", name: 'Clothing Item 9' },
  { id: 10, imageUrl: "http://127.0.0.1:5000/image/img(10).jpg", name: 'Clothing Item 10' },
];

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  /*const [data, setData] = useState(0)
  const [array, setArray] = useState([]);
  const [images, setImages] = useState([]);*/


  /*useEffect(() => {
    axios.get("http://127.0.0.1:5000/image/").then(res => {
      setImages(res.data)
      //console.log(res.data)
    });
  }, []);*/


  /*images.urls?.map((img, index) => (
  <image src={img} index={index} key={index} />
  ))*/

  return (
    <div>
      <Header theme={theme} />
      <SearchBar theme={theme} />
      <ImageUpload theme={theme} />
      {<ClothingGallery theme={theme} clothingData={clothingData} />}
      <div className={`app ${theme}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="theme-toggler-container ">
                <DisplayMode theme={theme} toggleTheme={toggleTheme} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div >
      <Footer />
    </div>

    /*
      {(typeof data.test) === 'undefined' ? (
        <p>wait</p>
      ) : (
        data.test.map((wa, i) => (
          <p key={i}>{wa}</p>
        ))
      )} */
  );
};

export default App;