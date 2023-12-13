import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as colors from '../../config/colors'

export const DeleteLink = styled(Link)`
  margin-top: 10px;

  color: ${colors.primaryColor};

  &:hover {
    color: ${colors.primaryLightColor};
  }

  &:active {
    color: ${colors.primaryLighterColor};
  }
`

export const DeleteLinkConfirm = styled(Link)`
  margin-top: 10px;

  color: ${colors.dangerColor};

  &:hover {
    color: ${colors.dangerLightColor};
  }

  &:active {
    color: ${colors.dangerDarkColor};
  }
`
