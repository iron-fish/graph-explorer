/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { StyledBlock } from './Block.styled'

export type ColorBlockProps = {
  color: string
  index: number
}

export const ColorBlock = ({ color, index }: ColorBlockProps) => (
  <StyledBlock>
    <div
      css={css`
        position: relative;
        z-index: 30;
        width: calc(1.5em - 2px);
        height: calc(1.5em - 2px);
        background-color: ${color};
        &::after {
          position: absolute;
          content: '';
          width: 1px;
          background-color: #dedfe2;
          display: inline-block;
          ${index === 0
            ? `
            height: 2em;
            top: 2.75em;
            `
            : `
            height: 6.25em;
            top: 1.525em;
            left: -3.15em;
            transform: rotate(45deg);
            `}
        }
      `}
    />
  </StyledBlock>
)

export default ColorBlock
