import React from 'react';
import ClothingItem from './ClothingItem';
import styled from 'styled-components';

const ImageContainer = styled.div`
    background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#222222')};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    padding-top: 30px; /* Adjust as needed */
`;

const ClothingList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Adjust the gap between items */
    justify-content: center; /* Align items in the center */
`;

const clothingData = [
  { id: 1, imageUrl: './logo192.png', name: 'Clothing Item 1' },
  { id: 2, imageUrl: './logo192.png', name: 'Clothing Item 2' },
  { id: 3, imageUrl: './logo192.png', name: 'Clothing Item 3' },
  { id: 4, imageUrl: './logo192.png', name: 'Clothing Item 4' },

];

const ClothingGallery = ({ theme }) => {
  return (
    <ImageContainer theme = {theme}>
      <ClothingList>
        {clothingData.map((item) => (
          <ClothingItem key={item.id} imageUrl={item.imageUrl} name={item.name} />
        ))}
      </ClothingList>
    </ImageContainer>
  );
};

export default ClothingGallery;