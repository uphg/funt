import * as _ from '../src/index'
import { each, remain } from '../src/index'
import {
  symbol, bigInt, error, stringObj, numberObj, booleanObj, date,
  regex, func, argsFn, mapObj,weakMapObj, setObj, weakSetObj
} from './_utils'

describe('type judgment methods', () => {

  const baseTypes = [
    true, 1, -Infinity, NaN, 'a', bigInt, symbol, null, undefined
  ]
  const objTypes = [
    { a: 1 },
    [1, 2, 3],
    func,
    stringObj,
    numberObj,
    booleanObj,
    error,
    date,
    regex,
    mapObj,
    weakMapObj,
    setObj,
    weakSetObj,
    argsFn()
  ]

  const typesMap = {
    isBoolean: [
      [true, false],
      [...remain(baseTypes, 0, 1), ...objTypes]
    ],
    isNumber: [
      [0, 1],
      [...remain(baseTypes, 1, 3), ...objTypes]
    ],
    isNaN: [
      [NaN],
      [...remain(baseTypes, 3, 1), ...objTypes]
    ],
    isString: [
      ['', 'hi'],
      [...remain(baseTypes, 4, 1), ...objTypes]
    ],
    isBigInt: [
      [bigInt],
      [...remain(baseTypes, 5, 1), ...objTypes]
    ],
    isSymbol: [
      [symbol],
      [...remain(baseTypes, 6, 1), ...objTypes]
    ],
    isNil: [
      [null, undefined],
      [...remain(baseTypes, 7, 2), ...objTypes]
    ],
    isFinite: [
      [1, 0],
      [...remain(baseTypes, 1, 1), ...objTypes]
    ],
    isObject: [
      objTypes,
      baseTypes
    ],
    isArray: [
      [objTypes[1]],
      [...remain(objTypes, 1, 1), ...baseTypes]
    ],
    isFunction: [
      [func],
      [...remain(objTypes, 2, 1), ...baseTypes]
    ],
    isError: [
      [error],
      [...remain(objTypes, 6, 1), ...baseTypes]
    ],
    isDate: [
      [date],
      [...remain(objTypes, 7, 1), ...baseTypes]
    ],
    isRegExp: [
      [regex],
      [...remain(objTypes, 8, 1), ...baseTypes]
    ],
    isMap: [
      [mapObj],
      [...remain(objTypes, 9, 1), ...baseTypes]
    ],
    isWeakMap: [
      [weakMapObj],
      [...remain(objTypes, 10, 1), ...baseTypes]
    ],
    isSet: [
      [setObj],
      [...remain(objTypes, 11, 1), ...baseTypes]
    ],
    isWeakSet: [
      [weakSetObj],
      [...remain(objTypes, 12, 1), ...baseTypes]
    ],
    isArguments: [
      [argsFn()],
      [...remain(objTypes, 13, 1), ...baseTypes]
    ],
    isObjectLike: [
      [{ a: 1 }, [1, 2, 3]],
      [...baseTypes, func]
    ]
  }

  each(typesMap, (item, name) => {
    describe(`${name} method`, () => {
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
})
