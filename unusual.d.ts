declare module 'unusual'

interface Random {
  seed: number | string
  random(): number
  integer(): number
  pick(raw: A[]): A
  pickKey(obj: Record<string, any>): string
  pickValue(obj: Record<string, x>): x
  floor(a: number): number
  floorMin(min: number, a: number): number
  shuffle(raw: A[]): A[]
}

class Unusual {
  constructor(seed: String): Random

  random(): number
  integer(): number
  pick(raw: A[]): A
  pickKey(obj: Record<string, any>): string
  pickValue(obj: Record<string, x>): x
  floor(a: number): number
  floorMin(min: number, a: number): number
  shuffle(raw: A[]): A[]
}

export default Unusual
