import * as _ from '../src/index'
import { each, remainPart } from '../src/index'
import { symbol, bigInt } from './_utils'

describe('type judgment methods', () => {
  // boolean, number, string, bigInt, symbol, null, undefined
  const testList = [
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
      remainPart(testList, 0, 1)
    ],
    isNumber: [
      [0, 1],
      remainPart(testList, 1, 1)
    ],
    isString: [
      ['', 'hi'],
      remainPart(testList, 2, 1)
    ],
    isBigInt: [
      [bigInt],
      remainPart(testList, 3, 1)
    ],
    isSymbol: [
      [symbol],
      remainPart(testList, 4, 1)
    ],
    isNil: [
      [null, undefined],
      remainPart(testList, 5, 2)
    ],
    isObject: [
      [testList[7]],
      remainPart(testList, 7)
    ],
    isArray: [
      [testList[8]],
      remainPart(testList, 8, 1)
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
