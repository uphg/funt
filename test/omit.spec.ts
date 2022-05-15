import { omit } from '../src/index'

describe('omit', () => {
  it('is a function', () => {
    expect(typeof omit).toBe('function')
  })

  it('object string key', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    }
    expect(omit(obj, ['a'])).toEqual({ b: 2, c: 3 })
  })

  it('object mixin string or symbol key', () => {
    const symbolKey = Symbol()
    const symbolKey2 = Symbol()
    const obj = {
      a: 1,
      b: 2,
      [symbolKey]: 3,
      [symbolKey2]: 4
    }
    expect(omit(obj, ['a', symbolKey])).toEqual({ b: 2, [symbolKey2]: 4 })
  })
})
