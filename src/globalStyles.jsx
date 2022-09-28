import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  button { 
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color:  #111111;
  }
`;
