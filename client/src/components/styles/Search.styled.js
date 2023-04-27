import styled from 'styled-components';
import '../../styles/constants.css';

export const SearchStyled = styled.div`

  margin-bottom: 40px;

  .form__group {
    // margin: 0 auto;

    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 30%;
    display: flex;
  }

  .form__field {  
    font-family: inherit;
    width: 400px;
    border: 0;
    border-bottom: 2px solid white;
    outline: 0;
    font-size: 1.3rem;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: white;
    pointer-events: none;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: white;
      font-weight:700;    
    }
    display: inline-block;
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    // change this if we want a gradient in the future
    border-image: linear-gradient(to right, white,white);
    border-image-slice: 1;
  }
  /* reset input */
  .form__field{
    &:required,&:invalid { box-shadow:none; }
  }

  .search-button {
    display: inline-block;
    background-color: transparent;
    border: 2px solid white;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    margin-left: 10px;
    outline: none;
    padding: 7px 15px;
  }

  .search-button:hover {
    border-width: 3px;
  }
  .search-button:focus {
    border-width: 3px;
  }
`;
