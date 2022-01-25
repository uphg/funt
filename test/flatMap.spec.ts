import { flatMap } from '../src/index'

describe('flatMap', () => {
  it('is a function', () => {
    expect(typeof flatMap).toBe('function')
  })

  it('flat array', () => {
    expect(flatMap([1, 2, 3], (item) => [item, item])).toEqual([1, 1, 2, 2, 3, 3])
    expect(flatMap(['a', 'b', 'c'], (item) => [item, item])).toEqual(['a', 'a', 'b', 'b', 'c', 'c'])
  })
})
