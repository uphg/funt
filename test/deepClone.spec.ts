import { deepClone } from '../src/index'
import { symbol } from './_utils'

describe('deepClone', () => {
  it('Copy basic type', () => {
    const s = 'hi'
    const b = false
    const n = 0
    const infinity = Infinity
    const nan = NaN
    const bigInt = BigInt(9007199254740991)
    const null1 = null
    const undefined1 = undefined

    const s2 = deepClone(s)
    const b2 = deepClone(b)
    const n2 = deepClone(n)

    const infinity2 = deepClone(infinity)
    const nan2 = deepClone(nan)
    const bigInt2 = deepClone(bigInt)
    const symbol2 = deepClone(symbol)
    const null2 = deepClone(null1)
    const undefined2 = deepClone(undefined1)

    expect(s).toBe(s2)
    expect(b).toBe(b2)
    expect(n).toBe(n2)

    expect(infinity).toBe(infinity2)
    expect(nan2).toBe(nan)
    expect(bigInt2).toBe(bigInt)
    expect(symbol2).toBe(symbol)
    expect(null2).toBe(null1)
    expect(undefined2).toBe(undefined1)
  })

  it('Copy object type', () => {
    const obj = { a: 'hi' }
    const array = [1, 'a', true, NaN, symbol]

    const obj2 = deepClone(obj)
    const array2 = deepClone(array)

    expect(obj).not.toBe(obj2)
    expect(obj).toEqual(obj2)
    expect(array).not.toBe(array2)
    expect(array).toEqual(array2)
  })

  it('Deep copy object type', () => {
    const obj = {
      foo: {
        bar: {
          aaa: {
            bbb: 'hi'
          },
          ccc: false 
        },
        one: {
          ddd: 123
        }
      }
    }

    const array = [
      [1, 'a', true, NaN, symbol],
      [
        [
          2, 'b', false,
          [null, undefined]
        ]
      ]
    ]

    const obj2 = deepClone(obj)
    const array2 = deepClone(array)

    expect(obj).not.toBe(obj2)
    expect(obj).toEqual(obj2)
    expect(array).not.toBe(array2)
    expect(array).toEqual(array2)
  })

  it('Copy RegExp type', () => {
    const regex = new RegExp(/a/)
    const regex2: RegExp = deepClone(regex)

    expect(regex).not.toBe(regex2)
    expect(regex.source).toBe(regex2.source)
    expect(regex.flags).toBe(regex2.flags)
  })

  it('Copy Date type', () => {
    const date = new Date()
    const date2: Date = deepClone(date)

    expect(date).not.toBe(date2)
    expect(date.getTime()).toBe(date2.getTime())
  })

  it('Can refer to itself', () => {
    const obj: { [key: string]: unknown } = { a: 'hi' }
    obj.self = obj

    const obj2 = deepClone(obj)

    expect(obj).toEqual(obj2)
  })

  xit('Will not burst the stack', () => {
    // ...
  })
})
