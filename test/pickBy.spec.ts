import { pickBy } from '../src/index'

describe('pickBy', () => {
  it('is a function', () => {
    expect(typeof pickBy).toBe('function')
  })

  it('object string key', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    }
    expect(pickBy(obj, (value) => value > 1)).toEqual({ b: 2, c: 3 })
  })

  it('object mixin string or symbol key', () => {
    const symbolKey = Symbol()
    const obj = {
      a: 1,
      b: 2,
      [symbolKey]: 3
    }
    expect(pickBy(obj, (_value, key) => key === symbolKey)).toEqual({ [symbolKey]: 3 })
  })
})
