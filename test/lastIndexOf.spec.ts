import { lastIndexOf } from '../src/index'

describe('lastIndexOf', () => {
  it('is a function', () => {

  })

  it('xxx', () => {
    const array = [2, 5, 9, 2]
    expect(lastIndexOf(array, 2)).toBe(3)
    expect(lastIndexOf(array, 7)).toBe(-1)
    expect(lastIndexOf(array, 2, 3)).toBe(3)
    expect(lastIndexOf(array, 2, 2)).toBe(0)
    expect(lastIndexOf(array, 2, -2)).toBe(0)
    expect(lastIndexOf(array, 2, -1)).toBe(3)
  })
})