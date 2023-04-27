import React, { useEffect } from 'react';

// internal
// css
import { HomePageStyled } from './styles/HomePage.styled.js';
// components
import Search from './Search.jsx';

// shading the background image
const formatImageLink = (link) => {
  return `linear-gradient( rgba(0, 0, 0, .3), rgba(0, 0, 0, .3) ), url('${link}')`;
};

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomePageStyled
      className='home-page'
      style={{
        backgroundImage: formatImageLink(
          'https://ik.imagekit.io/hfywj4j0a/SamsPage/SamInSedona.JPG'
        ),
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
