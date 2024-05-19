import React, { useState, /*useEffect*/ } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import DisplayMode from './display_mode';
import Footer from './footer';
import SearchBar from './searchbar';
import ImageUpload from './ImageUpload';
import './App.css';
import styled from 'styled-components';
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
];

const Background = styled.div`
  background-size: cover;
  filter: blur(10px); 
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; 
`;
function App() {

  const handleOptionSelect = (selectedOption) => {
    // Handle the selected option here
    console.log("Selected option:", selectedOption);
  };
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
      <Background />
      <Header theme={theme} />
      <SearchBar theme={theme} onOptionSelect={handleOptionSelect} />
      <ImageUpload theme={theme} />
      <ClothingGallery theme={theme} />
      <div className={`app ${theme}`}>
        <Container className='col-lg-4 col-md-6 col-sm-8 col-xs-12'>
          <Row className="justify-content-center">
            <Col lg={4} md={6} sm={8} xs={12}>
              <div className="theme-toggler-container">
                <DisplayMode theme={theme} toggleTheme={toggleTheme} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;