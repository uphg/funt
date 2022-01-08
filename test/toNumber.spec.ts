import { each, toNumber } from '../src/index'
import {
  symbol, error, stringObj, regex, func, argsFn,
  mapObj,weakMapObj, setObj, weakSetObj
} from './_utils'

describe('toNumber', () => {
  it('is a function', () => {
    expect(typeof toNumber).toBe('function')
  })

  it('number to number', () => {
    const n1 = 1
    const n2 = new Number(1)
    expect(toNumber(n1)).toBe(1)
    expect(toNumber(n2)).toBe(1)
  })

  it('string to number', () => {
    const string = '123'
    expect(toNumber(string)).toBe(123)
  })

  it('symbol to number', () => {
    const symbol = Symbol()
    expect(toNumber(symbol)).toBe(NaN)
  })

  it('binary string to number', () => {
    const binary1 = '0b11001'
    const binary2 = '0b11011'
    expect(toNumber(binary1)).toBe(25)
    expect(toNumber(binary2)).toBe(27)
  })

  it('octal string to number', () => {
    const octal1 = '0o31'
    const octal2 = '0o33'
    expect(toNumber(octal1)).toBe(25)
    expect(toNumber(octal2)).toBe(27)
  })

  it('Boolean to number', () => {
    expect(toNumber(true)).toBe(1)
    expect(toNumber(false)).toBe(0)
    expect(toNumber(new Boolean(false))).toBe(0)
    expect(toNumber(new Boolean(true))).toBe(1)
  })

  it('Date to number', () => {
    const date = new Date()
    expect(toNumber(date)).toBe(date.getTime())
    
  })

  it('Number type is not converted', () => {
    expect(toNumber(1)).toBe(1)
    expect(toNumber(-Infinity)).toBe(-Infinity)
    expect(toNumber(NaN)).toBe(NaN)
  })

  it('null to number return 0', () => {
    expect(toNumber(null)).toBe(0)
  })

  it('Other types turn to number return NaN', () => {
    const types = [
      'a', symbol, undefined, { a: 1 }, [1, 2, 3],
      func, stringObj, error, regex, mapObj,
      weakMapObj, setObj, weakSetObj, argsFn()
    ]
    
    each(types, (item) => {
      expect(toNumber(item)).toBe(NaN)
    })
  })
})
