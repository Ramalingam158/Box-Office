import React, { useState } from 'react';
import MainPageComponent from '../components/MainPageComponent';

const Home = () => {
  const [input, setInput] = useState('');

  const keyPress = ev => {
    setInput(ev.target.value);
  };

  const search = () => {
    // https://api.tvmaze.com/search/shows?q=girls
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };

  const keyDown = ev => {
    if (ev.keyCode === 13) {
      search();
    }
  };

  return (
    <MainPageComponent>
      <input
        type="text"
        onChange={keyPress}
        onKeyDown={keyDown}
        value={input}
      ></input>
      <input type="button" onClick={search} value="Search"></input>
    </MainPageComponent>
  );
};

export default Home;
