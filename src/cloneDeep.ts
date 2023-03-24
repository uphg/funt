import getSymbols from './internal/getSymobls'
import getObjectTag from './internal/getObjectTag'
import initCloneObject from './internal/initCloneObject'
import cloneArrayBuffer from './internal/cloneArrayBuffer'
import cloneDataView from './internal/cloneDataView'
import cloneTypedArray from './internal/cloneTypedArray'
import { ObjectLike, TypedArray } from './internal/types'
import includes from './includes'
import isObject from './isObject'
import each from './each'
import find from './find'
import keys from './keys'

const objectTag = '[object Object]'
const numberTag = '[object Number]'
const stringTag = '[object String]'
const booleanTag = '[object Boolean]'
const dateTag = '[object Date]'
const regExpTag = '[object RegExp]'
const mapTag = '[object Map]'
const weakMapTag = '[object WeakMap]'
const weakSetTag = '[object WeakSet]'
const weakRefTag ='[object WeakRef]'
const setTag = '[object Set]'
const functionTag = '[object Function]'
const arrayTag = '[object Array]'
const argsTag = '[object Arguments]'
const arrayBufferTag = '[object ArrayBuffer]'
const dataViewTag = '[object DataView]'
const float32Tag = '[object Float32Array]'
const float64Tag = '[object Float64Array]'
const int8Tag = '[object Int8Array]'
const int16Tag = '[object Int16Array]'
const int32Tag = '[object Int32Array]'
const uint8Tag = '[object Uint8Array]'
const uint8ClampedTag = '[object Uint8ClampedArray]'
const uint16Tag = '[object Uint16Array]'
const uint32Tag = '[object Uint32Array]'

function findCache(cache: [unknown, unknown][], value: unknown) {
  return find(cache, (item) => item[0] === value)?.[1]
}

function initTypeObject(value: ObjectLike<any>): object {
  let result: object | null = null
  const tag = getObjectTag(value)
  const Constr = value.constructor as any
  switch (tag) {
    case arrayBufferTag:
      result = cloneArrayBuffer(value as ArrayBuffer)
      break
    case booleanTag:
    case dateTag:
      result = new Constr(+value)
      break
    case dataViewTag:
      result = cloneDataView(value as DataView)
      break
    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      result = cloneTypedArray(value as TypedArray)
      break
    case numberTag:
    case stringTag:
      result = new Constr(value)
      break
    case regExpTag:
      result = new RegExp(value.source, value.flags)
      break
    case mapTag:
    case setTag:
    case weakMapTag:
    case weakSetTag:
      result = new Constr
      break
    case functionTag:
      result = function(this: any, ...args: unknown[]) {
        (value as (...args: any) => any).apply(this, args)
      }
      break
    case arrayTag:
      result = new Constr((value as any[]).length)
      break
    case objectTag:
    case argsTag:
    case weakRefTag:
      result = initCloneObject(value)
      break
    default:
      result = value
  }

  return result as object
}

function cloneDeep<T>(value: T, count?: { value: number }): T {
  if (!isObject(value)) return value

  const result = initTypeObject(value) as object
  const cache: [any, any][] = []
  const stack: [any, any][] = [[value, result]]

  while (stack.length) {
    // 临时计数
    count && (count.value += 1)

    const piece = stack.shift() as [any, any]
    const source = piece[0]
    const copy = piece[1]
    const tag = getObjectTag(source)

    cache.push(piece)

    if (includes([setTag, mapTag, weakSetTag, weakMapTag], tag)) {
      const addName = setTag || weakSetTag ? 'add' : 'set'
      each(source, (item: any) => {
        const prev = findCache(cache, item)
        if (prev) {
          copy[addName](prev)
        } else if (isObject(item)) {
          const newObject = initTypeObject(item)
          copy[addName](newObject)
          stack.push([item, newObject])
        } else {
          copy[addName](item)
        }
      })
    } else {
      const propNames = [...keys(source), ...getSymbols(source)]

      each(propNames, (item, key) => {
        const prev = findCache(cache, item)
        if (prev) {
          copy[key] = prev
        } else if (isObject(item)) {
          copy[key] = initTypeObject(item)
          stack.push([item, copy[key]])
        } else {
          copy[key] = item
        }
      })
    }
  }

  return result as T
}

export default cloneDeep
