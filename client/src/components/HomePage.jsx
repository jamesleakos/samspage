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

  const [url, setUrl] = useState(
    `https://ik.imagekit.io/hfywj4j0a/tr:w-2500/images/${randomURL()}`
  );

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

  const [randomWM, setRandomWM] = useState(null);
  useEffect(() => {
    axios
      .get('https://jamesleakos.com/posts/ext/random')
      .then((res) => {
        console.log(res.data);
        if (typeof res.data === 'string') setRandomWM(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <HomePageStyled
      className='home-page'
      style={
        !!url && {
          backgroundImage: formatImageLink(url),
        }
      }
    >
      <div className='main-content'>
        <Search />
        <div className='content-info'>Days ran in a row: 456</div>
        <div className='content-info'>Miles ran this year: 2234</div>
        {!!randomWM && (
          <a
            href={`https://jamesleakos.com/post-viewer/${randomWM}`}
            className='content-info'
          >
            Random Wolfmoor Article
          </a>
        )}
      </div>
    </HomePageStyled>
  );
}

export default HomePage;
