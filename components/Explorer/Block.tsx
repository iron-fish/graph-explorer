/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { pipe, map } from 'ramda'
import Debug from 'components/Debug'
import { BlockRowProps, ColorBlockProps } from './types'

import styled from '@emotion/styled'

export const StyledBlock = styled.div<BlockRowProps>`
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

const indices = {
  zero: `
height: 2em;
top: 2.75em;
`,
  one: `
height: 6.5em;
top: 1.3em;
left: -3.35em;
transform: rotate(45deg);
`,
  two: `
height: 14em;
top: -2.2em;
left: -7.6em;
transform: rotate(70deg);
`,
}

const abbreviateHash = (hash: string) => {
  const l = hash.length
  if (l <= 8) return l
  return hash.slice(0, 4) + '…' + hash.slice(-4, Infinity)
}

const LabelledData = ({ name, value }: { name: string; value: string }) => (
  <li
    css={css`
      display: flex;
      flex-direction: column;
      width: 25%;
      margin-bottom: 1rem;
    `}
  >
    <strong>{name}</strong>
    <span>{value}</span>
  </li>
)

type FuckYouTypescript = [string, string]

export const ColorBlock = (props: BlockRowProps) => {
  const {
    hash = '',
    id = '',
    previous_block_hash: prevHash = '',
    sequence = '',
    main = true,
    active = false,
    color,
    index,
    graffiti = '',
    difficulty = '',
  } = props
  return (
    <StyledBlock {...props}>
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
      {active && (
        <div
          css={css`
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            z-index: 40;
          `}
        >
          <ul
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: center;
              justify-content: flex-start;
            `}
          >
            {[
              ['Hash', abbreviateHash(hash)],
              ['Block Id', id],
              ['Prev', abbreviateHash(prevHash)],
              ['Seq', sequence],
              ['Main', main.toString()],
              ['Graff', graffiti],
              ['Work', difficulty],
            ].map(([k, v]) => (
              // @ts-ignore
              <LabelledData key={k} name={k} value={v} />
            ))}
          </ul>
        </div>
      )}
    </StyledBlock>
  )
}

export default ColorBlock
