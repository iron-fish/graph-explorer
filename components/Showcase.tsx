/** @jsxImportSource @emotion/react */
import type { ReactNode } from 'react'
import { css } from '@emotion/react'

import { Col } from 'components/Box'
import { COLORS, NAMED_COLORS } from 'styles/constants'

export type ShowcaseProps = {
  headerColor: string
  title: ReactNode
  children: ReactNode
}

export function Showcase({ headerColor, title, children }: ShowcaseProps) {
  return (
    <div>
      <Col
        css={css`
          background: ${headerColor};
          padding: 4em 2em;
          width: calc(100% - 4em);
          text-align: left;
        `}
      >
        {title}
      </Col>
      {children}
    </div>
  )
}

export default Showcase
