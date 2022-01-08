import { chunk } from '../src/index'

describe('chunk', () => {
  it('is a function', () => {
    expect(typeof chunk).toBe('function')
  })

  it('chunk array', () => {
    const a = [1, 2, 3, 4, 5, 6, 7]
    expect(chunk(a, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]])
  })
})
