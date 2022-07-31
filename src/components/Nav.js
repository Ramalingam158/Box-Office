import React from 'react';
import { Link } from 'react-router-dom';

let LINKS = [
  { to: '/', txt: 'Home' },
  { to: '/starred', txt: 'Starred' },
];

const Nav = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => {
          return (
            <li key={item.to}>
              <Link to={item.to}>{item.txt}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
