import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const withSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => (isLoading ? (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
) : (
  <WrappedComponent {...otherProps} />
));

export default withSpinner;
