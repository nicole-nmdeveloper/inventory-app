import styled from 'styled-components'

import * as colors from '../../config/colors'

export const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;

  text-align: center;

  background: ${colors.primaryLighterColor};

  @media screen and (min-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;

  background: ${colors.lightColor};

  padding: 10% 5%;

  h1 {
    color: ${colors.primaryColor};
    padding-bottom: 30px;
  }

  label {
    width: 180px;
    height: 180px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px dashed ${colors.primaryLightColor};

    cursor: pointer;

    overflow: hidden;

    &:hover {
      background: ${colors.primaryLighterColor};

      border: 2px dashed ${colors.primaryColor};
    }

    &:active {
      background: ${colors.lightColor};
    }
  }

  input {
    display: none;
  }

  span {
    color: ${colors.primaryColor};

    font-weight: 500;
  }

  img {
    width: 180px;
    height: 180px;
  }

  @media screen and (max-width: 280px) {
    h1 {
      font-size: 26px;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 50%;

    padding: 5%;
  }
`

export const Gallery = styled.div`
  border-radius: 5px;

  padding: 40px;

  width: 90%;

  display: grid;
  place-items: center;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 5px;
  }

  @media screen and (min-width: 470px) {
    width: 80%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`
