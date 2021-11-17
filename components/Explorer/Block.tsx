/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { StyledBlock } from './Block.styled'

export type ColorBlockProps = {
  color: string
  main: boolean
}

export const ColorBlock = ({ color, main }: ColorBlockProps) => (
  <StyledBlock>
    <div
      css={css`
        position: relative;
        z-index: 100;
        width: calc(1.5rem - 2px);
        height: calc(1.5rem - 2px);
        background-color: ${color};
        border: 1px solid ${main ? '#dedfe2' : 'lime'};
      `}
    />
  </StyledBlock>
)

export default ColorBlock
