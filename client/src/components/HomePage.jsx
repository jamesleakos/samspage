import React, { useState, useEffect } from 'react';
import axios from 'axios';

// internal
// css
import { HomePageStyled } from './styles/HomePage.styled.js';
// components
import Search from './Search.jsx';
// image urls
import randomURL from '../helpers/randomImageURL.js';

// shading the background image
const formatImageLink = (link) => {
  return `linear-gradient( rgba(0, 0, 0, .3), rgba(0, 0, 0, .3) ), url('${link}')`;
};

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const url = `https://ik.imagekit.io/hfywj4j0a/tr:w-2500/images/${randomURL()}`;

  console.log(url);

  // DEPRECATED: now we just ping the imagekit CDN
  // useEffect(() => {
  //   axios
  //     .get('/image/random')
  //     .then((res) => {
  //       console.log(res.data);
  //       if (typeof res.data === 'string') setUrl(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <HomePageStyled
      className='home-page'
      style={{
        backgroundImage: formatImageLink(url),
      }}
    >
      <div className='main-content'>
        <Search />
        <div className='content-info'>Days ran in a row: 456</div>
        <div className='content-info'>Miles ran this year: 2234</div>
      </div>
    </HomePageStyled>
  );
}

export default HomePage;
