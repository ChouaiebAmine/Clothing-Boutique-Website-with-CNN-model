import React from 'react';
import Form from 'react-bootstrap/Form';



const DisplayMode = ({ theme, toggleTheme }) => {
  return (
    <Form.Check
      type="switch"
      id="custom-switch"
      label="Theme"
      checked={theme === 'light'}
      onChange={toggleTheme}
    />
  );
};

export default DisplayMode;

