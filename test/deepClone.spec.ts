import { deepClone } from '../src/index'
import { symbol } from './_utils'

describe('deepClone', () => {
  it('is a function', () => {
    expect(typeof deepClone).toBe('function')
  })

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

  it('Will not burst the stack', (done) => {
    // ...
    const obj: any = {
      child: {}
    }
    let temp = obj.child
    for (let i = 0; i < 10000; i++) {
      temp.child = {}
      temp = temp.child
    }

    void deepClone(obj)
    done()
  })

  it('Packaging object', () => {
    const numberObj = new Number(3)
    const booleanObj = new Boolean(false)
    const stringObj = new String('')
    const obj = {
      a: [numberObj, booleanObj, booleanObj, 1, 2, 3],
      b: {
        p1: stringObj,
        p2: 'hi'
      },
      c: {
        b1: numberObj,
        b2: booleanObj,
        b3: booleanObj,
        b4: 1,
        b5: 2,
        b6: 3
      }
    }
    
    const obj2 = deepClone(obj)
    expect(obj2).toEqual(obj)
  })

  it('Support Set objects', () => {
    const obj = {
      a: [1, 2, 3],
      b: new Set([
        {
          p1: 'hi',
          p2: 'hello',
          p3: new Set([1, 2, 3]),
          p4: new Map([
            ['a', 1],
            ['b', 2],
            ['c', 3]
          ])
        }
      ]),
      c: {
        d: 'hi',
        e: new Set([7, 8, 9])
      }
    }
    const obj2 = deepClone(obj)
    expect(obj2).toEqual(obj) 
  })

  it('Support Map objects', () => {
    const obj = {
      a: [1, 2, 3],
      b: new Map<string, any>([
        ['a', 1],
        ['b', 2],
        [
          'c',
          {
            p1: 'hi',
            p2: 'hello',
            p3: new Map([
              ['a', 1],
              ['b', 2],
              ['c', 3]
            ]),
            p4: {
              p1: 'hi',
              p2: 'hello'
            },
            p5: new Set([1, 2, 3])
          }
        ]
      ]),
      c: {
        d: 'hi',
        e: new Map([
          ['a', 1],
          ['b', 2],
          ['c', 3]
        ])
      }
    }
    const obj2 = deepClone(obj)
    expect(obj2).toEqual(obj) 
  })

  it('Copy array custom property', () => {
    const a = [1, 2, 3] as any
    a.p1 = '123'
    a.p2 = '456'
    const a2 = deepClone(a)
    expect(a2).toEqual(a) 
  })

  it('Copy objects containing symbol', () => {
    const object = {
      p1: 'a',
      p2: 'b',
      p3: 'c',
      [Symbol()]: 'd',
      [Symbol()]: 'e',
      [Symbol()]: 'f'
    }
    const object2 = deepClone(object)
    expect(object2).toEqual(object) 
  })

  it('Copy ArrayBuffer', () => {
    const buffer = new ArrayBuffer(8)
    const buffer2 = deepClone(buffer)
    expect(buffer2).toEqual(buffer) 
  })

  it('Copy DataView', () => {
    const buffer = new ArrayBuffer(16)
    const view1 = new DataView(buffer)
    const view2 = new DataView(buffer, 12, 4)

    const view3 = deepClone(view1)
    const view4 = deepClone(view2)
    expect(view3).toEqual(view1)
    expect(view4).toEqual(view2)
  })

  it('Copy TypedArray', () => {
    const buffer = new ArrayBuffer(16)

    const typedArrays = [
      new Float32Array(buffer),
      new Float64Array(buffer),
      new Int8Array(buffer),
      new Int16Array(buffer),
      new Int32Array(buffer),
      new Uint8Array(buffer),
      new Uint8ClampedArray(buffer),
      new Uint16Array(buffer),
      new Uint32Array(buffer)
    ]

    const typedArrays2 = deepClone(typedArrays)
    expect(typedArrays2).toEqual(typedArrays)
  })
})
