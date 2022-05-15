import { omitBy } from '../src/index'

describe('omitBy', () => {
  it('is a function', () => {
    expect(typeof omitBy).toBe('function')
  })

  it('object string key', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    }
    expect(omitBy(obj, (value) => value > 1)).toEqual({ a: 1 })
  })

  it('object mixin string or symbol key', () => {
    const symbolKey = Symbol()
    const symbolKey2 = Symbol()
    const obj = {
      a: 1,
      [symbolKey]: 2,
      [symbolKey2]: 3
    }
    expect(omitBy(obj, (_value, key) => key === symbolKey)).toEqual({ a: 1, [symbolKey2]: 3 })
  })
})
