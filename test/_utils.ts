const symbol = Symbol('a')
const bigInt = BigInt(9007199254740991)
const error = new Error()
const date = new Date()
const regex = /a/
const func = () => void 0
function argsFn() {
  // eslint-disable-next-line prefer-rest-params
  return arguments
}

const stringObj = new String('a')
const numberObj = new Number(0)
const booleanObj = new Boolean(true)
const mapObj = new Map()
const weakMapObj = new WeakMap()
const setObj = new Set()
const weakSetObj = new WeakSet()

const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
const arrayBuffer = new ArrayBuffer(0)

const MAX_INTEGER = 1.7976931348623157e+308

export {
  symbol,
  bigInt,
  error,
  date,
  regex,
  func,
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
  MAX_INTEGER
}
