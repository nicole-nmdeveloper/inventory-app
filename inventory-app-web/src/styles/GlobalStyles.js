import styled, { createGlobalStyle } from 'styled-components'

import * as colors from '../config/colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: ${colors.darkColor};
    color: ${colors.darkColor};

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;

    background: ${colors.primaryDarkColor};
    color: ${colors.lightColor};

    border: none;
    border-radius: 5px;

    padding: 10px 20px;
  }

  button:hover {
    background: ${colors.primaryColor};
  }

  button:active {
    background: ${colors.primaryLightColor};
  }

  a {
    text-decoration: none;
    color: ${colors.lightColor};
  }

  a:hover {
    color: ${colors.primaryLightColor};
  }

  a:active {
    color: ${colors.primaryLighterColor};
  }

  ul {
    list-style: none;
  }
`

export const Container = styled.main`
  text-align: center;

  background: ${colors.primaryLighterColor};

  padding: 30px;
`
