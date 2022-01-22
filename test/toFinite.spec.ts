import { toFinite } from '../src/index'
import { MAX_INTEGER } from './_utils'

describe('toFinite', () => {
  it('is a function', () => {
    expect(typeof toFinite).toBe('function')
  })

  it('value to finite', () => {
    expect(toFinite(6.2)).toBe(6.2)
    expect(toFinite(-6.2)).toBe(-6.2)
    expect(toFinite('6.2')).toBe(6.2)
    expect(toFinite(Number.MIN_VALUE)).toBe(5e-324)
    expect(toFinite(Infinity)).toBe(MAX_INTEGER)
    expect(toFinite(-Infinity)).toBe(-MAX_INTEGER)
  })
})
