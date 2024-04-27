import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ClothingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 100px;
  margin-left: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: transform 0.2s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width:200px;
  height: 300px;
  object-fit : cover;
  border: 1px solid black;
`;

const Text = styled.p`
  margin-top: 10px;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#222222')}; /* Adjust background color based on theme */
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; /* Adjust text color based on theme */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.8s ease-in-out;
  border: 1px solid black;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ClothingItem = ({ imageUrl, name, theme }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  const randomPrice = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
  };

  return (
    <>
      <ClothingContainer onClick={togglePopup} >
        <Image src={imageUrl} alt={name} />
        <Text>{name}</Text>
      </ClothingContainer>
      {isPopupOpen && (
        <>
          <Overlay />
          <PopupContainer ref={popupRef} theme={theme}>
            <h2>{name}</h2>
            <Image src={imageUrl} alt={name} />
            <p>Price: DT {randomPrice(20, 200)}</p>
          </PopupContainer >
        </>
      )}
    </>
  );
};

export default ClothingItem;

