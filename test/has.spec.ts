import { has } from '../src/index'

describe('flattenDeep', () => {
  it('is a function', () => {
    expect(typeof has).toBe('function')
  })

  it('flat array', () => {
    const Fn = function() {
      this.a = 1
    }
    Fn.prototype.b = 2
    const obj1 = new Fn()
    expect(has(obj1, 'a')).toBeTruthy()
    expect(has(obj1, 'b')).toBeFalsy()
  })
})
