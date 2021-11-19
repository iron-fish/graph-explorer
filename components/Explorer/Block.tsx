/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { StyledBlock } from './Block.styled'
import { ColorBlockProps } from './types'

const indices = {
  zero: `
height: 2em;
top: 2.75em;
`,
  one: `
height: 6.25em;
top: 1.525em;
left: -3.15em;
transform: rotate(45deg);
`,
  two: `
height: 14em;
top: -2.2em;
left: -7.6em;
transform: rotate(70deg);
`,
}

export const ColorBlock = ({
  active,
  color,
  index,
  graffiti,
}: ColorBlockProps) => (
  <StyledBlock active={active}>
    <div
      css={css`
        position: relative;
        z-index: 30;
        width: calc(1.5em - 2px);
        height: calc(1.5em - 2px);
        background: ${color.includes('.')
          ? `repeating-linear-gradient(
      -45deg,
      white,
      white 2px,
      black 2px,
      black 4px
    );`
          : color};
        &::after {
          position: absolute;
          content: '';
          width: 1px;
          background-color: #dedfe2;
          display: inline-block;
          ${index === 2
            ? indices.two
            : index === 1
            ? indices.one
            : indices.zero}
        }
      `}
    />
  </StyledBlock>
)

export default ColorBlock
