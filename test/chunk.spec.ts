import { chunk } from '../src/index'

describe('chunk', () => {
  it('is a function', () => {
    expect(typeof chunk).toBe('function')
  })

  it('chunk array', () => {
    const a = [1, 2, 3, 4, 5, 6, 7]
    const b = ['a', 'b', 'c', 'd']
    const c = ['a', 'b', 'c', 'd', 'e']

    expect(chunk(a, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]])
    expect(chunk(a, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]])

    expect(chunk(b, 2)).toEqual([['a', 'b'], ['c', 'd']])
    expect(chunk(b, 3)).toEqual([['a', 'b', 'c'], ['d']])

    expect(chunk(c, 2)).toEqual([['a', 'b'], ['c', 'd'], ['e']])
    expect(chunk(c, 3)).toEqual([['a', 'b', 'c'], ['d', 'e']])
  })
})
