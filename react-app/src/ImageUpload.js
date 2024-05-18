import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


let uploaded = false;
const ImageContainer = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? '#EBDBCA' : '#222222')};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#EBDBCA')};
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageUploadDropzone = styled.label`
  border: 2px dashed ${({ theme }) => (theme === 'light' ? '#EBDBCA' : '#222222')};
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => (theme === 'light' ? '#555555' : '#dddddd')};
  }

  img {
    max-width: 100%;
    border-radius: 10px;
  }
`;

const UploadMessage = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: ${({ theme }) => (theme === 'light' ? '#222222' : '#ffffff')};
`;

const ConfirmButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: ${({ theme }) => (theme === 'light' ? '#007bff' : '#ffffff')};
  color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#007bff')};
  border: 2px solid ${({ theme }) => (theme === 'light' ? '#007bff' : '#ffffff')};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ? '#0056b3' : '#cccccc')};
    color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#007bff')};
  }
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
    const formData = new FormData();
    formData.append('image', image);
    axios.post('http://localhost:5000/img_upload', formData)
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
      <ImageUploadContainer>
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          name='file'
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <ImageUploadDropzone
          htmlFor="upload-input"
          theme={theme}
          onDrop={handleImageDrop}
          onDragOver={handleDragOver}
        >
          {!image && (
            <UploadMessage theme={theme}>Select or drop an image here</UploadMessage>
          )}
          {image && (
            <img src={URL.createObjectURL(image)} alt="Selected" />
          )}
        </ImageUploadDropzone>
        {image && (
          <ConfirmButton onClick={() => { handleConfirmUpload(); uploaded = true }}>Confirm Upload</ConfirmButton>
        )}
        {uploaded && (<ConfirmButton onClick={() => { window.location.reload(); uploaded = false }}> Load Recommendations </ConfirmButton>)}
      </ImageUploadContainer>
    </ImageContainer>
  );
};

export default ImageUpload;
