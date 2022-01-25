import { flatMapDeep } from '../src/index'

describe('flatMapDeep', () => {
  it('is a function', () => {
    expect(typeof flatMapDeep).toBe('function')
  })

  it('flat array', () => {
    const array = [1, 2, 3]
    const array2 = ['a', 'b', 'c']
    expect(flatMapDeep(array, (item) => [item, item])).toEqual([1, 1, 2, 2, 3, 3])
    expect(flatMapDeep(array2, (item) => [item, item])).toEqual(['a', 'a', 'b', 'b', 'c', 'c'])
  })

  it('flat deep array', () => {
    const array = [1, 2, 3]
    const array2 = ['a', 'b', 'c']
    expect(flatMapDeep(array, (item) => [[[[item, item]]]])).toEqual([1, 1, 2, 2, 3, 3])
    expect(flatMapDeep(array2, (item) => [[[[item, item]]]])).toEqual(['a', 'a', 'b', 'b', 'c', 'c'])
  })
})
