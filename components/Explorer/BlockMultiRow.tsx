/** @jsxImportSource @emotion/react */
import { BlockRowProps, BlockRow } from './BlockRow'
import { css } from '@emotion/react'

type BlockMultiRowProps = {
  forks: BlockRowProps[]
}
export const BlockMultiRow = ({ forks }: BlockMultiRowProps) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      margin-bottom: 0.75em;
      margin-left: ${forks.length === 2 ? '8em' : '0'};
    `}
  >
    {forks.map((block: BlockRowProps, idx: number) => (
      <BlockRow key={block.id} {...block} showHeight={idx === 0} index={idx} />
    ))}
  </div>
)

export default BlockMultiRow
