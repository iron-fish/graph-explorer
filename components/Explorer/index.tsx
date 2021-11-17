/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

import {
  propEq,
  uniqBy,
  find,
  reduce,
  curry,
  pipe,
  join,
  split,
  slice,
  map,
  addIndex,
} from 'ramda'
import { css } from '@emotion/react'
import useSWR, { SWRConfig } from 'swr'
import Unusual from 'unusual'
import pkg from 'package.json'
import toColor from 'utils/graffitiToColor'
import fixture from 'fixture.json'
import { StyledBlock } from './Block.styled'
import { BlockRowProps, BlockRow } from './BlockRow'

const uniqId = uniqBy((x: BlockRowProps) => x.id)

const trace = curry((a: string, b: any) => {
  console.log(a, b)
  return b
})

const imap = addIndex(map)

const fetcher = (url: string) => fetch(url).then(res => res.json())
const API = '/api/blocks?limit=50'

export async function getServerSideProps() {
  const value = await fetcher(API)
  console.log({ value })
  return {
    props: {
      fallback: {
        [API]: value,
      },
    },
  }
}

const findParents = curry((key: string, list: BlockRowProps[]) =>
  find(propEq('hash', key), list)
)

function History(props: any) {
  const { data = {}, error } = useSWR(API, fetcher)
  console.log('Is data ready?', !!data)
  console.log({ data, props })
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      {error
        ? error.toString()
        : pipe(
            /*(raw: BlockRowProps[]) =>
              // @ts-ignore
              reduce(
                // @ts-ignore
                (a: BlockRowProps[], b: BlockRowProps) => {
                  const z = uniqId(a)
                  const parent = findParents(b.previous_block_hash, raw)
                  const alreadyPresent = z.includes(b)
                  const alreadyParents = parent && z.includes(parent)
                  if (alreadyParents && alreadyPresent) {
                    return a
                  }
                  if (parent && !alreadyParents && !alreadyPresent) {
                    return a.concat(parent).concat(b)
                  }
                  return a.concat(b)
                },
                []
              )(raw),
            blah => {
              console.log('same?', blah === data.data)
              return blah
              },*/
            // map(raw => <Debug {...raw} key={Math.random()} />)
            map((raw: BlockRowProps) => <BlockRow key={raw.id} {...raw} />)
          )(data.data || [])}
    </div>
  )
}
type AppProps = { fallback?: Record<string, unknown> }
export default function App({ fallback = fixture }: AppProps) {
  return (
    <SWRConfig value={{ fallback }}>
      <History />
    </SWRConfig>
  )
}
