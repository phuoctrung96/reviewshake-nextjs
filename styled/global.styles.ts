import { createGlobalStyle } from 'styled-components';
const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'GalanoGrotesque', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  main {
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  dd,
  fieldset,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hgroup,
  hr,
  ol,
  pre,
  table,
  ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  sup {
    vertical-align: top;
    top: initial;
    font-size: smaller;
    line-height: inherit;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  li {
    list-style: none;
  }

  #HW_badge_cont {
    align-self: center;
  }

  input:focus-visible,
  textarea:focus-visible {
    outline: none;
    box-shadow: inset 0px 0px 0px 1px #25e85f;
  }
`;
