/** @jsxImportSource @emotion/react */
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
}: BlockRowProps) => (
  <div
    key={id}
    css={css`
      display: flex;
      flex-direction: row;
      position: relative;
      justify-content: space-between;
      align-items: center;
      height: 4em;
      margin: 0.5em;
      width: ${!showHeight ? '3.5rem' : '12.5em'};
      margin-left: ${!showHeight ? '4rem' : '0'};
      line-height: 1.6em;
      color: #7f7f7f;
      background-color: ${!main ? 'lime' : 'transparent'};
    `}
  >
    {showHeight && sequence}
    <ColorBlock color={toColor(graffiti)} index={index} />
  </div>
)

export default BlockRow
