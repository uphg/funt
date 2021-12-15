import * as _ from '../src/index'
import { each, remain } from '../src/index'
import { symbol, bigInt } from './_utils'

describe('Common types methods', () => {

  const testTypes = [
    true, 1, 'a', bigInt, symbol, null, undefined,
    { a: 'b' },
    [1, 2, 3],
    new Boolean(true),
    new Error(),
    new Date(),
    /a/,
    () => {}
  ]

  const typesMap = {
    isBoolean: [
      [true, false],
      remain(testTypes, 0, 1)
    ],
    isNumber: [
      [0, 1],
      remain(testTypes, 1, 1)
    ],
    isString: [
      ['', 'hi'],
      remain(testTypes, 2, 1)
    ],
    isBigInt: [
      [bigInt],
      remain(testTypes, 3, 1)
    ],
    isSymbol: [
      [symbol],
      remain(testTypes, 4, 1)
    ],
    isNil: [
      [null, undefined],
      remain(testTypes, 5, 2)
    ],
    isObject: [
      [testTypes[7]],
      remain(testTypes, 7)
    ],
    isArray: [
      [testTypes[8]],
      remain(testTypes, 8, 1)
    ],
    isFunction: [
      [() => {}],
      remain(testTypes, 13, 1)
    ]
  }

  each(typesMap, (item, name) => {
    it(`${name} is a function`, () => {
      expect(_[name]).toBeInstanceOf(Function);
    })

    it(`${name} values return \`true\``, () => {
      each(item[0], (value) => {
        expect(_[name](value)).toBe(true);
      })
    })

    it(`${name} values return \`false\``, () => {
      each(item[1], (value) => {
        expect(_[name](value)).toBe(false);
      })
    })
  })
})

describe('Other types methods', () => {
  const object = { a: 'b' }
  const array = [1, 2, 3]
  const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
  const arrayBuffer = new ArrayBuffer(0)
  const booleanObj = new Boolean(true)
  const error = new Error()
  const date = new Date()
  const regex = /a/ 
  const testTypes = [
    object,               // Object
    array,                // Array
    arrayLike,            // ArrayLike
    arrayBuffer,          // ArrayBuffer
    booleanObj,           // Boolean Object
    error,                // Error
    date,                 // Date
    regex                 // RegExp
  ]

  const typesMap = {
    isArray: [
      [array, arrayLike, arrayBuffer],
      [booleanObj, error]
    ]
  }
})