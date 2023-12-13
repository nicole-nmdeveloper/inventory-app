import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

import * as colors from '../config/colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    ${colors.primaryColor} 0%,
    ${colors.primaryDarkerColor} 100.2%
  );
    color: ${colors.darkColor};

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html, body, #root {
    min-height: 100vh;
  }

  button {
    cursor: pointer;

    background: ${colors.primaryDarkColor};
    color: ${colors.lightColor};

    border: none;
    border-radius: 5px;

    padding: 10px 20px;

    &:hover {
      background: ${colors.primaryColor};
    }

    &:active {
      background: ${colors.primaryLightColor};
    }
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`

export const GlobalFormContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  text-align: center;

  background: ${colors.lightColor};

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    overflow: hidden;
  }

  section {
    background: ${colors.primaryLighterColor};
    color: ${colors.primaryDarkColor};

    h1 {
      font-size: 35px;

      padding: 20% 10%;
    }

    @media screen and (min-width: 1024px) {
      height: 100vh;
      width: 50%;

      h1 {
        font-size: 40px;

        padding: 25% 15%;
      }
    }
  }
`

export const OpenForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;

  background: ${colors.lightColor};

  padding: 10% 5%;

  @media screen and (min-width: 1024px) {
    height: 100vh;
    width: 50%;
  }
`

export const PrivateForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;

  background: ${colors.lightColor};

  padding: 10% 5%;

  h1 {
    color: ${colors.primaryColor};
    padding-bottom: 30px;
  }

  @media screen and (max-width: 280px) {
    h1 {
      font-size: 26px;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`

export const GlobalLink = styled(Link)`
  color: ${colors.primaryColor};

  &:hover {
    color: ${colors.primaryLightColor};
  }

  &:active {
    color: ${colors.primaryLighterColor};
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;

  margin-bottom: 15px;
`

export const Input = styled.input`
  height: 35px;
  width: 70%;

  font-size: 14px;

  border: 1px solid ${colors.primaryLightColor};
  border-radius: 5px;

  padding: 0 10px;

  &:focus {
    border: 1px solid ${colors.primaryDarkColor};
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;

  width: 70%;

  margin-bottom: 10px;
`
