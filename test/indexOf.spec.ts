import { indexOf } from '../src/index'

describe('indexOf', () => {
  it('is a function', () => {
    expect(typeof indexOf).toBe('function')
  })

  it('Iterate the array', () => {
    const array = [2, 5, 9]
    const nanArray = [1, 2, NaN, 3]
    expect(indexOf(array, 2)).toBe(0)
    expect(indexOf(array, 7)).toBe(-1)
    expect(indexOf(array, 9, 2)).toBe(2)
    expect(indexOf(array, 2, -1)).toBe(-1)
    expect(indexOf(array, 2, -3)).toBe(0)
    expect(indexOf(nanArray, NaN, 1)).toBe(2)
    expect(indexOf(nanArray, NaN, 3)).toBe(-1)
    expect(indexOf(nanArray, NaN, -2)).toBe(2)
    expect(indexOf(nanArray, NaN, -1)).toBe(-1)
  })
})
