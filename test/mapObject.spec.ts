import { mapObject } from '../src/index'

describe('map', () => {
  it('is a function', () => {
    expect(mapObject).toBeInstanceOf(Function)
  })

  it('Iterate the object', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(mapObject(obj, (item) => item * 3)).toEqual([3, 6, 9])
  })
})