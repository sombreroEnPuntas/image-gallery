import styled from 'styled-components'

import { mobileBreakpointInPixels } from '../data/constants'

export const Button = styled.button`
  border-radius: 50%;
  border: 0;
  padding: 0;
  height: 32px;
  width: 32px;

  background-color: rgba(10, 10, 10, 50%);
  color: papayawhip;
  left: 70px;
  position: relative;
  top: -160px;

  @media (min-width: ${mobileBreakpointInPixels}px) {
    top: -299px;
    left: 132px;
  }
`
