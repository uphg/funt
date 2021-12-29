import { remain } from '../src/index'

describe('remain', () => {
  it('is a function', () => {
    expect(typeof remain).toBe('function')
  })

  it('Get the remaining part of the array', () => {
    const array = [1, 2, 3, 4, 5, 6]
    expect(remain(array, 2, 2)).toEqual([1, 2, 5, 6])
    expect(remain(array, 3)).toEqual([1, 2, 3])
  })
})
