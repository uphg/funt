import { map } from '../src/index'

describe('map', () => {
  it('is a function', () => {
    expect(typeof map).toBe('function')
  })

  it('Iterate the array', () => {
    const array = [1, 2, 3]
    expect(map(array, (item) => item * 2)).toEqual([2, 4, 6])
    expect(map(array, (item) => item * item)).toEqual([1, 4, 9])
  })

  it('Iterate the object', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(map(obj, (item) => item * 3)).toEqual([3, 6, 9])
  })
})
