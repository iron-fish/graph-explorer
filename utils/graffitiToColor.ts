import { pipe, curry, slice, split, addIndex, map, join } from 'ramda'
import Unusual from 'unusual'

const imap = addIndex(map)

const prefix = curry((a: string, b: string) => a + b)
export const stringToDecimal = (x: string) =>
  pipe(
    split(''),
    imap((i, n) => Number(x.charCodeAt(n))),
    join('')
  )(x)

export const seeded = (d: string): number => new Unusual(d).random()

export const toString = curry((radix: number, x: number) => x.toString(radix))
export const multiply = curry((a: number, b: number) => a * b)

export const generate = (x: string): string =>
  toString(16)(seeded(x) * Math.pow(2, 24))

export const toColor = (x: string) =>
  x ? prefix('#', slice(0, 6, generate(x))) : '.'

export default toColor
