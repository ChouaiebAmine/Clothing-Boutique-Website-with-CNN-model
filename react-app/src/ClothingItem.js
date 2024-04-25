import React from 'react';
import styled from 'styled-components';

const ClothingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 100px;
  margin-left : 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Text = styled.p`
  margin-top: 10px;
`;

const ClothingItem = ({ imageUrl, name }) => {
  return (
    <ClothingContainer>
      <Image src={imageUrl} alt={name} />
      <Text>{name}</Text>
    </ClothingContainer>
  );
};

export default ClothingItem;
