import { keys } from '../src/index'

describe('keys', () => {
  it('is a function', () => {
    expect(typeof keys).toBe('function')
  })

  it('object', () => {
    const object = { a: 1, b: 2, c: 3 }
    expect(keys(object)).toEqual(['a', 'b', 'c'])
  })

  it('string', () => {
    const string = 'hi'
    expect(keys(string)).toEqual(['0', '1'])
  })

  it('array', () => {
    const array = ['a', 'b', 'c']
    expect(keys(array)).toEqual(['0', '1', '2'])
  })

  it('function', () => {
    function Func() {
      this.a = 1
      this.b = 2
    }
    Func.prototype.c = 3
    const f1 = new Func()
    expect(keys(f1)).toEqual(['a', 'b'])
  })

  it('symbol', () => {
    expect(keys(Symbol())).toEqual([])
  })

  it('null value', () => {
    expect(keys(null)).toEqual([])
    expect(keys(void 0)).toEqual([])
    expect(keys(-1/0)).toEqual([])
    expect(keys(0/0)).toEqual([])
    expect(keys(0)).toEqual([])
    expect(keys(1)).toEqual([])
    expect(keys(true)).toEqual([])
  })
})
