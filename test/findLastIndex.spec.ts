import findLastIndex from '../src/findLastIndex'

describe('eventEmitter', () => {
  it('is a function', () => {
    expect(findLastIndex).toBeInstanceOf(Function)
  })

  it('according to predicate return corresponding items', () => {
    const array = [1, 2, 3, 4, 5, 6]
    const objectArray = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'b' },
      { id: 5, name: 'a' },
    ]

    expect(findLastIndex(array, (item) => item === 2)).toBe(1)
    expect(findLastIndex(objectArray, (item) => item.id === 4)).toBe(3)
    expect(findLastIndex(objectArray, (item) => item.name === 'b')).toBe(3)
  })
})
