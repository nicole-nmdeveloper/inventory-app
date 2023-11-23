import styled from 'styled-components'

import * as colors from '../../config/colors'

export const Container = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.8);

  font-size: 20px;

  div {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`

export const Circle = styled.div`
  width: 25px;
  height: 25px;

  border-radius: 50%;

  background: ${colors.primaryColor};

  z-index: 2;
`
