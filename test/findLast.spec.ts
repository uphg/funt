import findLast from '../src/findLast'

describe('eventEmitter', () => {
  it('is a function', () => {
    expect(findLast).toBeInstanceOf(Function)
  })

  it('get number item', () => {
    const array = [1, 2, 3, 2, 1]
    expect(findLast(array, (item) => item === 3)).toBe(3)
  })
})
