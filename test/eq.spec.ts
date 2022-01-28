import { eq } from '../src/index'

describe('eq', () => {
  it('is a function', () => {
    expect(typeof eq).toBe('function')
  })

  it('determines whether two values are the same value', () => {
    expect(eq(-0, -0)).toBeTruthy()
    expect(eq(0, 0)).toBeTruthy()
    expect(eq(-0, +0)).toBeFalsy()
    expect(eq(NaN, NaN)).toBeTruthy()
    expect(eq(1/0, 1/0)).toBeTruthy()
    expect(eq(-1/0, -1/0)).toBeTruthy()
    expect(eq(-1/0, 1/0)).toBeFalsy()
  })
})
