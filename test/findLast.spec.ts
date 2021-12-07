import findLast from '../src/findLast'

describe('eventEmitter', () => {
  it('is a function', () => {
    expect(findLast).toBeInstanceOf(Function)
  })

  it('get number item', () => {
    const array = [1, 2, 3, 2, 1]
    const objectArray = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'b' },
      { id: 5, name: 'a' },
    ]

    expect(findLast(array, (item) => item === 3)).toBe(3)
    expect(findLast(objectArray, (item) => item.id === 3)).toBe(objectArray[2])
    expect(findLast(objectArray, (item) => item.name === 'b')).toBe(objectArray[3])
  })
})
