/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const TickLink = styled.div`
  position: fixed;
  height: 100%;
  max-height: 100vh;
  margin-left: 4rem;
  border-right: 0.5px dashed #dedfe2;
  width: 1px;
  top: 0;
  transform: scaleX(20) scaleY(3);
  &:before {
    content: '';
    position: relative;
    left: 0.5px;
    background-color: #dedfe2;
    width: 1px;
    display: block;
    height: 100vw;
    transform: scaleX(0.05);
  }
`

export const Scrubber = () => <TickLink />

export default Scrubber
