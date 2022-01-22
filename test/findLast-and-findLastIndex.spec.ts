import { findLast, findLastIndex } from '../src/index'

describe('findLast and findLastIndex', () => {
  it('is a function', () => {
    expect(typeof findLast).toBe('function')
    expect(typeof findLastIndex).toBe('function')
  })

  it('findLastIndex', () => {
    const array = ['a', 'b', 'c', 'a']
    expect(findLastIndex(array, (item) => item === 'a')).toBe(3)
    expect(findLastIndex(array, (item) => item === 'b')).toBe(1)
    expect(findLastIndex(array, (item) => item === 'x')).toBe(-1)
    expect(findLastIndex(array, (item) => item === 'c', -3)).toBe(-1)
    expect(findLastIndex(array, (item) => item === 'a', -1)).toBe(3)
    expect(findLastIndex(array, (item) => item === 'a', -2)).toBe(0)
    expect(findLastIndex(array, (item) => item === 'a', 3)).toBe(3)
    expect(findLastIndex(array, (item) => item === 'a', 2)).toBe(0)
  })

  it('findLast', () => {
    const array = [
      {
        id: 1,
        name: 'a'
      },
      {
        id: 2,
        name: 'b'
      },
      {
        id: 3,
        name: 'c'
      },
      {
        id: 4,
        name: 'a'
      }
    ]
    expect(findLast(array, (item) => item.name === 'a')).toBe(array[3])
    expect(findLast(array, (item) => item.name === 'b')).toBe(array[1])
    expect(findLast(array, (item) => item.name === 'x')).toBeUndefined()
    expect(findLast(array, (item) => item.name === 'c', -3)).toBeUndefined()
    expect(findLast(array, (item) => item.name === 'a', -1)).toBe(array[3])
    expect(findLast(array, (item) => item.name === 'a', -2)).toBe(array[0])
    expect(findLast(array, (item) => item.name === 'a', 3)).toBe(array[3])
    expect(findLast(array, (item) => item.name === 'a', 2)).toBe(array[0])
  })
})