import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`

  *{
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
   }

  html,
  body {
    /* 62.5% => 10rem, 1rem = 10px */
    font-size: 62.5% !important;
    font-family: 'Pretendard-Regular';
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  img, 
  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
`

export default Globalstyles;