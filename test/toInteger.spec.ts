import { toInteger } from '../src/index'
import { MAX_INTEGER } from './_utils'

describe('toInteger', () => {
  it('is a function', () => {
    expect(typeof toInteger).toBe('function')
  })

  it('value to integer', () => {
    expect(toInteger(6.2)).toBe(6)
    expect(toInteger(-6.2)).toBe(-6)
    expect(toInteger('6.2')).toBe(6)
    expect(toInteger(Number.MIN_VALUE)).toBe(0)
    expect(toInteger(Infinity)).toBe(MAX_INTEGER)
  })
})
