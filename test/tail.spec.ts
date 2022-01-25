import { tail } from '../src/index'

describe('tail', () => {
  it('is a function', () => {
    expect(typeof tail).toBe('function')
  })

  it('get the tail part of the array', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3])
    expect(tail(['a', 'b', 'c'])).toEqual(['b', 'c'])
  })
})
