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
