import { toLength } from '../src/index'

describe('toLength', () => {
  it('is a function', () => {
    expect(typeof toLength).toBe('function')
  })

  it('value to length', () => {
    expect(toLength(6.2)).toBe(6)
    expect(toLength(-6.2)).toBe(0)
    expect(toLength('6.2')).toBe(6)
    expect(toLength(Number.MIN_VALUE)).toBe(0)
    expect(toLength(Infinity)).toBe(Math.pow(2, 32) -1)
  })
})
