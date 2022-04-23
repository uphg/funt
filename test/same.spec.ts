import { same } from '../src/index'

describe('same', () => {
  it('is a function', () => {
    expect(typeof same).toBe('function')
  })

  it('determines whether two values are the same value', () => {
    expect(same(-0, -0)).toBeTruthy()
    expect(same(0, 0)).toBeTruthy()
    expect(same(-0, +0)).toBeFalsy()
    expect(same(NaN, NaN)).toBeTruthy()
    expect(same(1/0, 1/0)).toBeTruthy()
    expect(same(-1/0, -1/0)).toBeTruthy()
    expect(same(-1/0, 1/0)).toBeFalsy()
  })
})
