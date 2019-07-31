import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url("https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.59.1/fonts/OpenSans-Regular-webfont.ttf");
    font-weight: 400;
    font-style: normal
  }
  
  html,
  body {
    height: 100%;
    font-size: 14px;
    width: 100%;
  }

  body {
    font-family: 'Open Sans';
  }

  body.fontLoaded {
    font-family: 'Open Sans';
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  button:focus, input[type="text"]:focus, input[type="button"]:focus, a:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  #app {
    min-width: 100%;
    position: relative;
    top: 49px;
  }
`;

export default GlobalStyle;
