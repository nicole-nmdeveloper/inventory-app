import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Nav = styled.nav`
  background: ${colors.darkColor};
  color: ${colors.lightColor};

  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: right;

  a {
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`

export const Divider = styled.span`
  color: ${colors.lightColor};

  padding: 0 15px;
`
