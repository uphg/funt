import { has } from '../src/index'

describe('has', () => {
  it('is a function', () => {
    expect(typeof has).toBe('function')
  })

  it('has object key', () => {
    const Fn = function() {
      this.a = 1
    }
    Fn.prototype.b = 2
    const obj1 = new Fn()
    expect(has(obj1, 'a')).toBeTruthy()
    expect(has(obj1, 'b')).toBeFalsy()
    expect(has(obj1, 'toString')).toBeFalsy()
  })
})
