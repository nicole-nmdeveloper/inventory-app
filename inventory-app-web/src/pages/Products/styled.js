import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as colors from '../../config/colors'

export const Table = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid ${colors.primaryLightColor};
  }

  a {
    color: ${colors.primaryColor};

    &:hover {
      color: ${colors.primaryDarkColor};
    }

    &:active {
      color: ${colors.primaryLightColor};
    }
  }
`

export const ProfilePicture = styled.div`
  width: 35px;
  height: 45px;

  img {
    width: 100%;
    height: 100%;

    border: 2px solid ${colors.darkColor};
    border-radius: 5px;
  }
`

export const NewProduct = styled(Link)`
  display: block;

  padding-top: 20px;

  color: ${colors.primaryColor};

  &:hover {
    color: ${colors.primaryDarkColor};
  }

  &:active {
    color: ${colors.primaryLightColor};
  }
`
