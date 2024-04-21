import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9999;
`;

const Checkbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const Label = styled.label`
  cursor: pointer;
  width: 50px;
  height: 27px;
  background: ${({ theme }) => (theme === 'light' ? 'grey' : 'black')};
  display: block;
  border-radius: 100px;
  position: relative;
  
`;

const Slider = styled.span`
  position: absolute;
  top: 2px;
  left: ${({ theme }) => (theme === 'light' ? '2px' : 'calc(100% - 25px)')};
  width: 23px;
  height: 23px;
  border-radius: 45px;
  transition: left 0.4s;
  background: #fff;
  box-shadow: 0 2px 5px #000000b3;
`;


const DisplayMode = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer>
      <Checkbox
        checked={theme === 'light'}
        onChange={toggleTheme}
        id="theme-switch"
        type="checkbox"
      />
      <Label htmlFor="theme-switch" theme={theme}>
        <Slider theme={theme} />
      </Label>
    </ToggleContainer>
  );
};

export default DisplayMode;

