import { values } from '../src/index'
import { args, strictArgs } from './_utils'

describe('values', () => {
  it('is a function', () => {
    expect(typeof values).toBe('function')
  })

  it('get string keyed values of object', () => {
    const obj = { a: 1, b: 2 }
    expect(values(obj)).toEqual([1, 2])
  })

  it('with an object that has a `length` property', () => {
    const obj = { 0: 'a', 1: 'b', length: 2 }
    expect(values(obj)).toEqual(['a', 'b', 2])
  })

  it('not include inherited string keyed property values', () => {
    function Fun() {
      this.a = 1
    }
    Fun.prototype.b = 2
    const vals = values(new Fun)
    expect(vals).toEqual([1])
  })

  it('with `arguments` objects', () => {
    const temp = [args, strictArgs]
    const actual = temp.map((item) => {
      return values(item)
    })
    expect(actual).toEqual([
      [1, 2, 3],
      [1, 2, 3]
    ])
  })
})
