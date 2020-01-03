import React from 'react';

import Spinner from '../spinner/spinner.component';

// eslint-disable-next-line react/display-name
const withSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => (
  isLoading
    ? <Spinner />
    : <WrappedComponent {...otherProps} />
);

export default withSpinner;
