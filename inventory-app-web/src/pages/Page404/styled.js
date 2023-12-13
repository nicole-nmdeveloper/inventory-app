import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as colors from '../../config/colors'

export const Page404Container = styled.div`
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    ${colors.primaryLighterColor} 0%,
    ${colors.primaryLightColor} 100.2%
  );

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  text-align: center;

  padding: 50px;

  h1 {
    font-size: 100px;

    color: ${colors.primaryColor};
  }

  h2 {
    font-size: 30px;
  }

  span {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    position: fixed;
    overflow: hidden;

    padding: 80px;
  }
`

export const GoHome = styled(Link)`
  background: ${colors.primaryDarkColor};
  color: ${colors.lightColor};

  padding: 15px 25px;

  border-radius: 30px;

  &:hover {
    background: ${colors.primaryColor};
  }
`
