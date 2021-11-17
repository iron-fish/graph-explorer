/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ColorBlock from './Block'
import { toColor } from 'utils/graffitiToColor'

export interface BlockRowProps {
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
}

export const BlockRow = ({
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
}: BlockRowProps) => (
  <div
    key={id}
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 4em;
      margin: 0.5em;
      width: 12.5em;
      line-height: 1.6em;
      color: #7f7f7f;
    `}
  >
    {sequence}
    <ColorBlock color={toColor(graffiti)} main={main} />
  </div>
)

export default BlockRow
