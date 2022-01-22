import { find, findIndex } from '../src/index'

describe('find and findIndex', () => {
  it('is a function', () => {
    expect(typeof find).toBe('function')
    expect(typeof findIndex).toBe('function')
  })

  it('findIndex', () => {
    const array = ['a', 'b', 'c', 'a']
    expect(findIndex(array, (item) => item === 'a')).toBe(0)
    expect(findIndex(array, (item) => item === 'b')).toBe(1)
    expect(findIndex(array, (item) => item === 'x')).toBe(-1)
    expect(findIndex(array, (item) => item === 'b', -2)).toBe(-1)
    expect(findIndex(array, (item) => item === 'a', -2)).toBe(3)
    expect(findIndex(array, (item) => item === 'a', -4)).toBe(0)
    expect(findIndex(array, (item) => item === 'a', 2)).toBe(3)
    expect(findIndex(array, (item) => item === 'a', 0)).toBe(0)
  })

  it('find', () => {
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
    expect(find(array, (item) => item.name === 'a')).toBe(array[0])
    expect(find(array, (item) => item.name === 'b')).toBe(array[1])
    expect(find(array, (item) => item.name === 'e')).toBeUndefined()
    expect(find(array, (item) => item.name === 'b', -2)).toBeUndefined()
    expect(find(array, (item) => item.name === 'a', -2)).toBe(array[3])
    expect(find(array, (item) => item.name === 'a', -4)).toBe(array[0])
    expect(find(array, (item) => item.name === 'a', 2)).toBe(array[3])
    expect(find(array, (item) => item.name === 'a', 0)).toBe(array[0])
  })
})