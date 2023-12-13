import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as colors from '../../config/colors'

export const ProductsContainer = styled.main`
  background: ${colors.lightColor};

  padding: 50px;

  h1 {
    color: ${colors.primaryColor};

    text-align: center;

    margin-bottom: 35px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 580px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
`

export const Card = styled.div`
  outline: 2px solid ${colors.primaryColor};
  border-radius: 5px;

  width: 100%;

  @media screen and (min-width: 580px) {
    width: 35vw;
  }

  @media screen and (min-width: 1024px) {
    width: 22vw;
  }
`

export const MainPicture = styled.div`
  width: 100%;
  height: 250px;
  display: flex;

  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    ${colors.primaryLighterColor} 0%,
    ${colors.primaryLightColor} 100.2%
  );

  color: ${colors.primaryDarkerColor};

  border-bottom: 2px solid ${colors.primaryColor};

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  padding: 10px;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10px;

  color: ${colors.primaryColor};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 40px;
`

export const NoProductsTitle = styled.h2`
  border-top: 1px solid ${colors.primaryLightColor};

  color: ${colors.primaryColor};

  margin-bottom: 50px;
  padding: 20px 0 5px 0;
`

export const NewProduct = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border: 2px dashed ${colors.primaryDarkerColor};
  border-radius: 4px;

  padding: 15px;

  color: ${colors.primaryDarkerColor};

  font-weight: 500;

  &:hover {
    background: ${colors.primaryLighterColor};
  }

  &:active {
    color: ${colors.primaryLightColor};
  }
`
