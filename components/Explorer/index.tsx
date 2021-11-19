/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import {
  toPairs,
  values,
  groupBy,
  prop,
  propOr,
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
import { useEffect, useState, ReactNode } from 'react'
import { css } from '@emotion/react'
import useSWR, { SWRConfig } from 'swr'
import Unusual from 'unusual'
import pkg from 'package.json'

import toColor from 'utils/graffitiToColor'
import fixture from 'fixture-blocks.json'

import { StyledBlock } from './Block.styled'
import { BlockRowProps, BlockRow } from './BlockRow'
import BlockMultiRow from './BlockMultiRow'
import Scrubber from 'components/Explorer/Scrubber'
import FilterMenu from 'components/Explorer/FilterMenu'
import ZoomContext from 'contexts/ZoomContext'

import Debug from 'components/Debug'

const uniqId = uniqBy((x: BlockRowProps) => x.id)

const trace = curry((a: string, b: any) => {
  console.log(a, b)
  return b
})

const imap = addIndex(map)

const fetcher = (url: string) => fetch(url).then(res => res.json())
const API = '/api/blocks'

export async function getServerSideProps() {
  const value = await fetcher(API + '?limit=100')
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

const StyledHistory = ({ children }: { children: ReactNode }) => {
  return (
    <ZoomContext.Consumer>
      {({ zoom }) => (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: ${zoom}rem;
          `}
        >
          {children}
        </div>
      )}
    </ZoomContext.Consumer>
  )
}

const afterId = (id: string) =>
  id ? API + '?limit=100&after=' + id : API + '?limit=100'

function History({ data = fixture, error = '' }) {
  console.log({ data: data.data, length: data.data.length })
  /*
  const [$allData, $setAllData] = useState<Record<string, unknown>[]>([])
  const addData = (x: Record<string, unknown>[]) =>
    $setAllData($allData.concat(x))
  const [$endpoint, $setEndpoint] = useState<string>(API)
  const [$records, $setRecords] = useState<number>(0)
  const [$lastId, $setLastId] = useState<string>('')
  const { data = {}, error } = useSWR($endpoint, fetcher)
  useEffect(() => {
    if (data && data.data) {
      $setRecords(data.data.length)
      addData(data.data)
      const lastId = data.data[data.data.length - 1].id
      $setLastId(lastId)
      $setEndpoint(afterId(lastId))
    }
  }, [
    $setRecords,
    $records,
    $lastId,
    $setLastId,
    $endpoint,
    $setEndpoint,
    $allData,
    ])
   */
  const prevHash = propOr('none', 'previous_block_hash')
  return (
    <StyledHistory>
      {error
        ? error.toString()
        : pipe(
            groupBy(prevHash),
            toPairs,
            map(([key, raw]: [key: string, raw: BlockRowProps[]]) => (
              <BlockMultiRow key={key} forks={raw} />
            ))
            // (raw: any) => <Debug key={Math.random()} {...raw} />
          )(data.data || [])}
    </StyledHistory>
  )
}
type AppProps = { fallback?: Record<string, unknown> }
export default function App({ fallback = fixture }: AppProps) {
  return (
    <>
      <Scrubber />
      <FilterMenu />
      <SWRConfig value={{ fallback }}>
        <History />
      </SWRConfig>
    </>
  )
}
