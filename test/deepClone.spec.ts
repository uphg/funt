import { deepClone } from '../src/index'

describe('deepClone', () => {
  it('Copy basic type', () => {
    const s = 'hi'
    const b = false
    const n = 0
    const infinity = Infinity
    const nan = NaN
    const bigInt = BigInt(9007199254740991)
    const symbol = Symbol('a')
    const null1 = null
    const undefined1 = undefined

    const s2 = deepClone(s)
    const b2 = deepClone(b)
    const n2 = deepClone(n)

    const infinity2 = deepClone(infinity)
    const nan2 = deepClone(nan)
    const bigInt2 = deepClone(bigInt)
    const symbol2 = deepClone(symbol)
    const null2 = deepClone(null1)
    const undefined2 = deepClone(undefined1)

    expect(s).toBe(s2)
    expect(b).toBe(b2)
    expect(n).toBe(n2)

    expect(infinity).toBe(infinity2)
    expect(nan2).toBe(nan)
    expect(bigInt2).toBe(bigInt)
    expect(symbol2).toBe(symbol)
    expect(null2).toBe(null1)
    expect(undefined2).toBe(undefined1)
  })

  it('Copy object type', () => {
    const obj = { a: 'hi' }
    const array = [1, 2, 3, 4]

    const obj2 = deepClone(obj)
    const array2 = deepClone(array)

    expect(obj).toEqual(obj2)
    expect(array).toEqual(array2)
  })
})