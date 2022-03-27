import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    h1 {
    font-size: 34px;
    font-weight: 700;
    line-height: 3;
    color: #181818;
  }
}
body{

    font-size:1.15em;
    margin: 0;
}

`;

export default GlobalStyles;
