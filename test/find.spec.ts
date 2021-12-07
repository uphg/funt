import find from '../src/find'

describe('eventEmitter', () => {
  it('is a function', () => {
    expect(find).toBeInstanceOf(Function)
  })

  it('according to predicate return corresponding items', () => {
    const array = [1, 2, 3, 4, 5, 6]
    const objectArray = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'd' },
      { id: 5, name: 'e' },
    ]
    
    expect(find(array, (item) => item === 3)).toBe(3)
    expect(find(objectArray, (item) => item.id === 3)).toBe(objectArray[2])
    expect(find(objectArray, (item) => item.name === 'd')).toBe(objectArray[3])
  })
})
