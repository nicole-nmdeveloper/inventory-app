import styled from 'styled-components'
import * as colors from '../../config/colors'

export const NavContainer = styled.nav`
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    ${colors.primaryColor} 0%,
    ${colors.primaryDarkerColor} 100.2%
  );

  color: ${colors.lightColor};

  padding: 30px;

  a {
    font-weight: 500;
    font-size: 16px;

    color: ${colors.lightColor};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &:hover {
      color: ${colors.primaryLighterColor};
    }

    &:active {
      color: ${colors.primaryLightColor};
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;

  div {
    display: flex;
    gap: 30px;
  }

  @media screen and (max-width: 280px) {
    a {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const DashboardNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

  div {
    display: flex;
    gap: 30px;
  }

  .greetings {
    font-size: 18px;
  }

  .iconLabel {
    display: none;
  }

  @media screen and (max-width: 280px) {
    gap: 25px;

    a {
      font-size: 13px;
    }
  }

  @media screen and (min-width: 360px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 760px) {
    .iconLabel {
      display: block;
    }
  }
`
