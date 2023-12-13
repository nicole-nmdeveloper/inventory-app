import styled from 'styled-components'

import * as colors from '../../config/colors'

export const FormContainer = styled.main`
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

export const ProductPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 0 0 10px;
  margin-top: 10px;

  img {
    width: 180px;
    height: 180px;

    border: 2px solid ${colors.primaryLightColor};
    border-radius: 5px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    border: none;
    border-radius: 50%;

    bottom: 0;

    color: ${colors.lightColor};
    background: ${colors.primaryColor};

    width: 40px;
    height: 40px;

    margin-left: 170px;
  }
`

export const IconContainer = styled.div`
  width: 180px;
  height: 180px;

  border: 2px dashed ${colors.primaryLightColor};
`
