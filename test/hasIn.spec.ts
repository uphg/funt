import { hasIn } from '../src/index'

describe('has', () => {
  it('is a function', () => {
    expect(typeof hasIn).toBe('function')
  })

  it('has object key', () => {
    const Fn = function() {
      this.a = 1
    }
    Fn.prototype.b = 2
    const obj1 = new Fn()
    expect(hasIn(obj1, 'a')).toBeTruthy()
    expect(hasIn(obj1, 'b')).toBeTruthy()
    expect(hasIn(obj1, 'toString')).toBeTruthy()
  })
})
