/** @jsxImportSource @emotion/react */
// ^ required to use css correctly
import { useState } from 'react'
import { css } from '@emotion/react'

import { COLORS, THEME } from 'styles/constants'

import { Col } from 'components/Box'
import Header from 'components/Header'
import Explorer from 'components/Explorer'

export default function Home() {
  return (
    <main
      css={css`
        font-size: 14px;
      `}
    >
      <Header />
      <Col
        css={css`
          width: calc(100% - 2rem);
        `}
      >
        <Explorer />
      </Col>
    </main>
  )
}
