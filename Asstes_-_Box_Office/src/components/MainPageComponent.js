import React from 'react';
import Nav from './Nav';

const MainPageComponent = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default MainPageComponent;
