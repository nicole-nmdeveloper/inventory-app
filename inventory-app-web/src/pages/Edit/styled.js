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

    position: fixed;
    overflow: hidden;
  }
`
