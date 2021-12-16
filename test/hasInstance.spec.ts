import { each, getFuncName } from '../src/index'
import hasInstance from '../src/hasInstance'



describe('hasInstance', () => {
  it('is a function', () => {
    expect(hasInstance).toBeInstanceOf(Function)
  })

  const constructorMap = [
    [{}, Object],
    [[], Array],
    [() => void 0, Function],
    [new Map(), Map],
    [new ArrayBuffer(0), ArrayBuffer],
    [new Set(), Set],
    [new Date(), Date],
    [new Error(), Error],
    [new Number(), Number],
    [/x/, RegExp],
    [new String(), String],
    [new Boolean(), Boolean],
    [new Promise(() => void 0), Promise],
    [new WeakMap(), WeakMap],
    [new WeakSet(), WeakSet]
  ]

  each(constructorMap, (item) => {
    it(`Exist ${ getFuncName(item[1]) } return \`true\``, () => {
      expect(hasInstance(item[0], item[1])).toBe(true)
    })
  })

  const constructors = [
    Map, Array, ArrayBuffer, Set, Date,
    Error, BigInt, Number, RegExp, String,
    Symbol, Boolean, Promise, WeakMap, WeakSet
  ]

  each(constructors, (item) => {
    it(`Object hasInstance ${ getFuncName(item) } return \`false\``, () => {
      expect(hasInstance(new Object(), item)).toBe(false)
    })
  })
  
})