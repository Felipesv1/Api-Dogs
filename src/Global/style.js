import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  @media (max-width:800px) {
  body{
    background:darkslateblue;
  }
  }

`;
