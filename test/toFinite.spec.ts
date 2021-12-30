import { toFinite } from '../src/index'
import { MAX_INTEGER } from './_utils'

describe('toFinite', () => {
  it('is a function', () => {
    expect(typeof toFinite).toBe('function')
  })

  it('number to finite', () => {

    expect(toFinite(2.7)).toBe(2.7)
    expect(toFinite(-2.7)).toBe(-2.7)
    expect(toFinite('2.7')).toBe(2.7)
    expect(toFinite(Number.MIN_VALUE)).toBe(5e-324)
    expect(toFinite(1/0)).toBe(MAX_INTEGER)
    expect(toFinite(-1/0)).toBe(-MAX_INTEGER)
  })
})
