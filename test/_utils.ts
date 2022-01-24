// 解决报错：regeneratorruntime is not defined
import 'regenerator-runtime/runtime'
import { create } from '../src/index'

const symbol = Symbol('a')
const bigInt = BigInt(9007199254740991)
const error = new Error()
const date = new Date()
const regex = /a/
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

export * from '../src/_common'

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
  CustomError
}
