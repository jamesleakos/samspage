import styled from 'styled-components';
import '../../styles/constants.css';

export const HomePageStyled = styled.div`
  height: 100vh;
  width: 100vw;

  // background image
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  // background-image in js as it gets shaded

  .main-content {
    padding: 50px 20px 20px 20px;
  }

  .content-info {
    color: white;
    font-size: 1rem;
    margin: 10px auto;
  }
`;
