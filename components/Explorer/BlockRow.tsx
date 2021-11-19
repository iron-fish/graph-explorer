/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { css } from '@emotion/react'
import ColorBlock from './Block'
import { toColor } from 'utils/graffitiToColor'
import { BlockRowProps } from './types'

export const BlockRow = (props: BlockRowProps) => {
  const { sequence, graffiti, index = -1, showHeight = true } = props
  const color = toColor(graffiti)
  const [$active, $setActive] = useState<boolean>(false)
  const toggle = () => $setActive(!$active)
  return (
    <div
      onClick={toggle}
      css={css`
        display: flex;
        flex-direction: row;
        position: relative;
        justify-content: center;
        align-items: center;
        height: ${$active ? '17em' : '4em'};
        margin: 0.5em;
        width: ${!showHeight ? '3.5em' : '100%'};
        margin-left: ${!showHeight ? '4em' : '0'};
        line-height: 1.6em;
        color: #7f7f7f;
      `}
    >
      {showHeight && (
        <div
          css={css`
            margin-right: 1em;
          `}
        >
          {sequence}
        </div>
      )}
      <ColorBlock {...props} color={color} active={$active} />
    </div>
  )
}

export default BlockRow
