/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { css } from '@emotion/react'
import ColorBlock from './Block'
import { toColor } from 'utils/graffitiToColor'

export interface BlockRowProps {
  index?: number
  id: number
  hash: string
  sequence: number
  previous_block_hash: string
  main: boolean
  difficulty: number
  transactions_count: number
  timestamp: string
  graffiti: string
  size: number
  showHeight?: boolean
}

export const BlockRow = ({
  index = -1,
  id,
  hash,
  sequence,
  previous_block_hash: prevHash,
  main,
  difficulty,
  transactions_count: transactionsTotal,
  timestamp,
  graffiti,
  size,
  showHeight = true,
}: BlockRowProps) => {
  const color = toColor(graffiti)
  const [$active, $setActive] = useState<boolean>(false)
  const toggle = () => $setActive(!$active)
  return (
    <div
      onClick={toggle}
      key={id}
      css={css`
        display: flex;
        flex-direction: row;
        position: relative;
        justify-content: space-between;
        align-items: center;
        height: ${$active ? '17em' : '4em'};
        margin: 0.5em;
        width: ${!showHeight ? '3.5em' : '12.5em'};
        margin-left: ${!showHeight ? '4em' : '0'};
        line-height: 1.6em;
        color: #7f7f7f;
      `}
    >
      {showHeight && sequence}
      <ColorBlock
        color={color}
        graffiti={graffiti}
        index={index}
        active={$active}
      />
    </div>
  )
}

export default BlockRow
