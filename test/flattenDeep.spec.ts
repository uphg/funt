import { flattenDeep } from '../src/index'

describe('flattenDeep', () => {
  it('is a function', () => {
    expect(typeof flattenDeep).toBe('function')
  })

  it('flat array', () => {
    const array1 = flattenDeep([[1, 2], [3, 4], [5, [6, 7]]])
    const array2 = flattenDeep([['a', 'b'], 'c', ['d', ['e', ['f']]]])

    expect(array1).toEqual([1, 2, 3, 4, 5, 6, 7])
    expect(array2).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
  })
})
