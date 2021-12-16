import { each, getFuncName } from '../src/index'

describe('getFunName', () => {
  it('is a function', () => {
    expect(getFuncName).toBeInstanceOf(Function)
  })

  it('get function name', () => {
    function fn1() { console.log(1) }
    expect(getFuncName(fn1)).toBe('fn1')
  })

  it('get native function name', () => {
    const natives = [
      [Object, 'Object'],
      [Function, 'Function'],
      [Array, 'Array'],
      [ArrayBuffer, 'ArrayBuffer'],
      [Boolean, 'Boolean'],
      [RegExp, 'RegExp'],
      [Error, 'Error'],
      [Date, 'Date']
    ]

    each(natives, (item) => {
      expect(getFuncName(item[0])).toBe(item[1])
    })
  })
})
