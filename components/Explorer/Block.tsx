/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { StyledBlock } from './Block.styled'

export type ColorBlockProps = {
  color: string
}

export const ColorBlock = ({ color }: ColorBlockProps) => (
  <StyledBlock>
    <div
      css={css`
        position: relative;
        z-index: 30;
        width: calc(1.5em - 2px);
        height: calc(1.5em - 2px);
        background-color: ${color};
      `}
    />
  </StyledBlock>
)

export default ColorBlock
