import isNil from '../src/isNil'
import { symbol, bigInt } from './_utils'

describe('isNil', () => {
  it('is a function', () => {
    expect(isNil).toBeInstanceOf(Function)
  })

  it('null and undefined values return `true`', () => {
    expect(isNil(null)).toBe(true)
    expect(isNil(undefined)).toBe(true)
  })

  it('other values return `false`', () => {
    expect(isNil('')).toBe(false)
    expect(isNil(0)).toBe(false)
    expect(isNil(true)).toBe(false)
    expect(isNil(1)).toBe(false)
    expect(isNil('a')).toBe(false)
    expect(isNil(bigInt)).toBe(false)
    expect(isNil(symbol)).toBe(false)
    expect(isNil({ a: 'b' })).toBe(false)
    expect(isNil([1, 2, 3])).toBe(false)
    expect(isNil(new Error())).toBe(false)
    expect(isNil(new Date())).toBe(false)
    expect(isNil(/a/)).toBe(false)
  })
})

