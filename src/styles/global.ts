import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};

      position: relative;
      z-index: 0;
    }

    body::after {
      background-image: url('/img/Al-Thumama-stadium.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;

      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;

      opacity: 0.05;
    }
  `}
`

export default GlobalStyles
