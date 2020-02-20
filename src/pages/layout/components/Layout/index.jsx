import React from 'react';
import propTypes from 'prop-types';

const Layout = ({ routes }) => {
  return <>{routes}</>;
};

Layout.propTypes = {
  routes: propTypes.array,
};

export default Layout;
