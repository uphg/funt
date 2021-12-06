import isNullish from '../src/isNullish'
import { symbol, bigInt } from './_utils'

describe('isNullish', () => {
  it('is a function', () => {
    expect(isNullish).toBeInstanceOf(Function)
  })

  it('null and undefined values return `true`', () => {
    expect(isNullish(null)).toBe(true)
    expect(isNullish(undefined)).toBe(true)
  })

  it('other values return `false`', () => {
    expect(isNullish('')).toBe(false)
    expect(isNullish(0)).toBe(false)
    expect(isNullish(true)).toBe(false)
    expect(isNullish(1)).toBe(false)
    expect(isNullish('a')).toBe(false)
    expect(isNullish(bigInt)).toBe(false)
    expect(isNullish(symbol)).toBe(false)
    expect(isNullish({ a: 'b' })).toBe(false)
    expect(isNullish([1, 2, 3])).toBe(false)
    expect(isNullish(new Error())).toBe(false)
    expect(isNullish(new Date())).toBe(false)
    expect(isNullish(/a/)).toBe(false)
  })
})

