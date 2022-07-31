import React from 'react';
import Header from './Header';
import Nav from './Nav';

const MainPageComponent = ({ children }) => {
  return (
    <div>
      <Header />
      <Nav />
      {children}
    </div>
  );
};

export default MainPageComponent;
