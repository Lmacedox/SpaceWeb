import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    *, button, input{
      border: 0px;
      background: none;

      font-family: 'Bellefair', serif;
  }

  html, body, #root{
      max-height: 100vh;
      max-width: 100vw;

      height: 100%;
      width: 100%;
  }

  *, button{
      background: none;
  }

  button{
      cursor: pointer;
  }
`;
