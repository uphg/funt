import 'regenerator-runtime/runtime' // 解决报错：regeneratorruntime is not defined
import { create } from '../src/index'

const symbol = Symbol('a')
const bigInt = BigInt(9007199254740991)
const error = new Error()
const date = new Date()
const regex = /a/
const args = toArgs([1, 2, 3])
const strictArgs = (function() { 'use strict'; return arguments; }(1, 2, 3));
const func = () => {}
const asyncFunc = async() => {}
const generatorFunc = function * foo() {}
function argsFn() {
  // eslint-disable-next-line prefer-rest-params
  return arguments
}

function CustomError(message) {
  this.name = 'CustomError';
  this.message = message;
}

function toArgs(array) {
  return (function() { return arguments; }.apply(undefined, array)) as IArguments
}

CustomError.prototype = create(Error.prototype, {
  constructor: CustomError
});


const stringObj = new String('a')
const numberObj = new Number(0)
const booleanObj = new Boolean(true)
const mapObj = new Map()
const weakMapObj = new WeakMap()
const setObj = new Set()
const weakSetObj = new WeakSet()

const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
const arrayBuffer = new ArrayBuffer(0)

const arrayProto = Array.prototype

export * from '../src/internal/common'

export {
  symbol,
  bigInt,
  error,
  date,
  regex,
  func,
  asyncFunc,
  generatorFunc,
  argsFn,
  stringObj,
  numberObj,
  booleanObj,
  arrayLike,
  arrayBuffer,
  mapObj,
  weakMapObj,
  setObj,
  weakSetObj,
  CustomError,
  arrayProto,
  toArgs,
  args,
  strictArgs
}
