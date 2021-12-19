import { map } from '../src/index'

describe('map', () => {
  it('is a function', () => {
    expect(map).toBeInstanceOf(Function)
  })

  it('Iterate the array', () => {
    const array = [1, 2, 3]
    expect(map(array, (item) => item * 2)).toEqual([2, 4, 6])
    expect(map(array, (item) => item * item)).toEqual([1, 4, 9])
  })
})
