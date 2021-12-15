import * as _ from '../src/index'
import { each, remain } from '../src/index'
import { symbol, bigInt } from './_utils'

describe('type judgment methods', () => {

  const testTypes = [
    true, 1, 'a', bigInt, symbol, null, undefined,
    { a: 'b' },
    [1, 2, 3],
    new Boolean(true),
    new Error(),
    new Date(),
    /a/
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
