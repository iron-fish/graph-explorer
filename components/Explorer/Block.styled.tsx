import styled from '@emotion/styled'

export const StyledBlock = styled.div`
  position: relative;
  z-index: 40;
  padding: 1em;
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
