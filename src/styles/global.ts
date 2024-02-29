import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme.green300};
  }

  body {
    background-color: ${(props) => props.theme.gray900};
    color: ${(props) => props.theme.gray300};
    -webkit-font-smoothing: antialiased;
  }
  
  body,
  button,
  textarea,
  input {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }

  /* custom scroll */

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.gray600};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.white};
    border-radius: 8px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.green500};
  }
  `;
