import { flatten } from '../src/index'

describe('flatten', () => {
  it('is a function', () => {
    expect(typeof flatten).toBe('function')
  })

  it('flat array', () => {
    const array1 = flatten([[1, 2], [3, 4], [5, [6, 7]]])
    const array2 = flatten([['a', 'b'], 'c', ['d', ['e', ['f']]]])

    expect(array1).toEqual([1, 2, 3, 4, 5, [6, 7]])
    expect(array2).toEqual(['a', 'b', 'c', 'd', ['e', ['f']]])
  })
})

