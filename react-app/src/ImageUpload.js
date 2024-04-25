import React, { useState } from 'react';
import './ImageUpload.css';
import styled from "styled-components"

const ImageContainer = styled.div`
    background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#222222')};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const ImageUpload = ({ theme }) => {
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

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
    setUploadedImage(image);
    setImage(null);
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
  };

  return (
    <ImageContainer theme={theme}>
      <div className="image-upload-container">
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <label
          htmlFor="upload-input"
          className="image-upload-dropzone"
          onDrop={handleImageDrop}
          onDragOver={handleDragOver}
        >
          {!uploadedImage && !image && (
            <p>Drag & drop or click to upload an image</p>
          )}
          {uploadedImage && (
            <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" style={{ maxWidth: '100%' }} />
          )}
          {image && !uploadedImage && (
            <img src={URL.createObjectURL(image)} alt="Selected" style={{ maxWidth: '100%' }} />
          )}
        </label>
        {image && !uploadedImage && (
          <button onClick={handleConfirmUpload}>Confirm Upload</button>
        )}
        
        {uploadedImage && (
          <button onClick={handleRemoveImage}>Remove Image</button>

        )}
      </div>
    </ImageContainer>


  );
};

export default ImageUpload;


