import { each } from '../src'
import hasInstance from '../src/hasInstance'
import { getFunName } from './_utils'



describe('hasInstance', () => {
  it('is a function', () => {
    expect(hasInstance).toBeInstanceOf(Function)
  })

  const constructorMap = [
    [{}, Object],
    [[], Array],
    [() => {}, Object],
    [new Map(), Map],
    [new ArrayBuffer(0), ArrayBuffer],
    [new Set(), Set],
    [new Date(), Date],
    [new Error(), Error],
    [new Number(), Number],
    [/x/, RegExp],
    [new String(), String],
    [new Boolean(), Boolean],
    [new Promise(() => {}), Promise],
    [new WeakMap(), WeakMap],
    [new WeakSet(), WeakSet]
  ]

  each(constructorMap, (item) => {
    it(`Exist ${ getFunName(item[1]) } return \`true\``, () => {
      expect(hasInstance(item[0], item[1])).toBe(true)
    })
  })

  const constructors = [
    Map, Array, ArrayBuffer, Set, Date,
    Error, BigInt, Number, RegExp, String,
    Symbol, Boolean, Promise, WeakMap, WeakSet
  ]

  each(constructors, (item) => {
    it(`Object hasInstance ${ getFunName(item) } return \`false\``, () => {
      expect(hasInstance(new Proxy({}, {}), item)).toBe(false)
    })
  })
  
})