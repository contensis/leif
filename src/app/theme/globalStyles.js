import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  /* Normalize/reset css */
  ${normalize}
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

  html, body {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    /* this sets 1rem to 10px */
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    font-weight: normal;
  }

  h1, .h1{
    font-size: 5.6rem;
    line-height: 6.4rem;
    font-weight: 500;
  }

  h2, .h2{
    font-size: 3.2rem;
    line-height: 4rem;
    font-weight: 500;
  }

  h3, .h3{
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 500;
  }

  h4, .h4{
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: 500;
  }

  h5, .h5{
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: normal;
  }
  
  h6, .h6{
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: normal;
  }

`;

export default GlobalStyle;
