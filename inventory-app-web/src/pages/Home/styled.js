import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as colors from '../../config/colors'

export const HomeContainer = styled.div`
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    ${colors.primaryLighterColor} 0%,
    ${colors.primaryLightColor} 100.2%
  );

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: left;

  padding: 40px;

  h1 {
    font-size: 40px;

    color: ${colors.primaryColor};
  }

  span {
    font-size: 20px;
    font-weight: 500;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    text-align: center;

    background-color: ${colors.lightColor};

    padding: 20px;

    margin-bottom: 30px;

    border-radius: 10px;
    box-shadow:
      0 4px 8px 0 rgba(0, 0, 0, 0.1),
      0 6px 20px 0 rgba(0, 0, 0, 0.1);

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      padding: 10px;
    }

    @media screen and (min-width: 1024px) {
      display: flex;
      flex-direction: row;

      padding: 50px;

      h1 {
        font-size: 55px;
      }

      div {
        padding: 20px;
      }
    }
  }
`

export const MainTitle = styled.div`
  border-top: 4px solid ${colors.primaryColor};
  border-right: 4px solid ${colors.primaryColor};

  border-top-right-radius: 5px;

  padding: 10px 30px 40px 0;

  margin-bottom: 75px;

  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 50px;
`

export const IconContainer = styled.div`
  background: ${colors.primaryLightColor};

  border-radius: 50%;

  margin-bottom: 10px;
`

export const GetStarted = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: ${colors.primaryDarkColor};
  color: ${colors.lightColor};

  max-width: 175px;

  padding: 15px 25px;

  border-radius: 30px;

  &:hover {
    background: ${colors.primaryColor};
  }
`
