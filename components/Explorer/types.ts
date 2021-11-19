export interface ColorBlockProps {
  active: boolean
  color: string
  index: number
  graffiti: string
}
export interface BlockRowProps extends ColorBlockProps {
  index: number
  id: string
  hash: string
  sequence: number
  previous_block_hash: string
  main: boolean
  difficulty: number
  transactions_count: number
  timestamp: string
  size: number
  showHeight?: boolean
}
