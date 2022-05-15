import { pick } from '../src/index'

describe('pick', () => {
  it('is a function', () => {
    expect(typeof pick).toBe('function')
  })

  it('object string key', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    }
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 })
  })

  it('object mixin string or symbol key', () => {
    const symbolKey = Symbol()
    const obj = {
      a: 1,
      b: 2,
      [symbolKey]: 3
    }
    expect(pick(obj, ['a', symbolKey])).toEqual({ a: 1, [symbolKey]: 3 })
  })
})
