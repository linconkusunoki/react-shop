import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...rest }) => (
  <button
    className={`${inverted ? 'invertedinverted' : ''} custom-button`}
    {...rest}
  >
    {children}
  </button>
);

export default CustomButton;
