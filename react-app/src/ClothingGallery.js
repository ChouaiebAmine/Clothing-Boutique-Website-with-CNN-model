import React from 'react';
import ClothingItem from './ClothingItem';
import styled from 'styled-components';

const ImageContainer = styled.div`
    background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#222222')};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    padding-top: 90px; 
`;

const ClothingList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px; 
    justify-content: center; 
`;
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

const ClothingGallery = ({ theme }) => {
  return (
    <ImageContainer theme={theme}>
      <ClothingList>
        {clothingData.map((item) => (
          <ClothingItem key={item.id} imageUrl={item.imageUrl} name={item.name} />
        ))
        }
      </ClothingList>
    </ImageContainer>
  );
};

export default ClothingGallery;