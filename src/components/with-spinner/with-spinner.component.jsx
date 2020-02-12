import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...rest }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...rest} />
    );
  };

  return Spinner;
};

export default WithSpinner;
