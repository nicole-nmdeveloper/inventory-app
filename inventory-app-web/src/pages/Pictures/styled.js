import styled from 'styled-components'

import * as colors from '../../config/colors'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100%;

  background: ${colors.lightColor};

  padding: 65px;

  h1 {
    margin-bottom: 15px;
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
`

export const Container = styled.main`
  display: grid;
  place-items: center;

  text-align: center;

  background: ${colors.primaryLighterColor};
`
