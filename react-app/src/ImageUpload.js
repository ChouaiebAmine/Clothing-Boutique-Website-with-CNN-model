import React, { useState } from 'react';
import './ImageUpload.css';
import styled from "styled-components"
import axios from 'axios';
const ImageContainer = styled.div`
    background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#222222')};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const ImageUpload = ({ theme }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const selectedImage = e.dataTransfer.files[0];
    setImage(selectedImage);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleConfirmUpload = () => {
    const formdata = new FormData();
    formdata.append('image', image);
    axios.post('http://localhost:5000/img_upload', formdata)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
    setImage(null);
  };

  return (
    <ImageContainer theme={theme}>
      <div className="image-upload-container">
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          name='file'
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <label
          htmlFor="upload-input"
          className="image-upload-dropzone"
          onDrop={handleImageDrop}
          onDragOver={handleDragOver}
        >
          {!image && (
            <p>Drag & drop or click to upload an image</p>
          )}
          {image && (
            <img src={URL.createObjectURL(image)} alt="Selected" style={{ maxWidth: '100%' }} />
          )}
        </label>
        {image && (
          <button onClick={handleConfirmUpload}>Confirm Upload</button>
        )}
      </div>
    </ImageContainer>
  );
};
  
export default ImageUpload;


