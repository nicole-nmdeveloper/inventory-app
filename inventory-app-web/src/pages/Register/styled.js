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
    display: flex;
    flex-direction: column;
    gap: 5px;

    margin-bottom: 15px;
  }

  input {
    height: 35px;
    width: 300px;

    font-size: 14px;

    border: 1px solid ${colors.primaryLightColor};
    border-radius: 5px;

    padding: 0 10px;

    &:focus {
      border: 1px solid ${colors.primaryDarkColor};
    }
  }
`

export const Container = styled.main`
  display: grid;
  place-items: center;

  text-align: center;

  background: ${colors.primaryLighterColor};
`
