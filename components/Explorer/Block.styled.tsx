import styled from '@emotion/styled'
import { ColorBlockProps } from './types'

export const StyledBlock = styled.div<ColorBlockProps>`
  position: relative;
  z-index: 40;
  padding: 1em;
  transition: width 0.3s ease-out, height 0.3s ease-out;
  height: ${({ active }) => (active ? '17em' : '1.25em')};
  width: ${({ active }) => (active ? '60em' : '1.25em')};
  &:before,
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 2px;
    border: 1px solid #dedfe2;
    content: '';
    z-index: 1;
  }
  &:after {
    left: 4px;
    top: 4px;
    z-index: -1;
  }
`
