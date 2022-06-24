import find from './find'
import keys from './keys'
import getSymbols from './internal/getSymobls'
import getTag from './internal/getTag'
import initCloneObject from './internal/initCloneObject'
import cloneArrayBuffer from './internal/cloneArrayBuffer'
import cloneDataView from './internal/cloneDataView'
import cloneTypedArray from './internal/cloneTypedArray'

import { ObjectLike, TypedArray } from './internal/interfaces'

// const objectTag = '[object Object]'
const numberTag = '[object Number]'
const stringTag = '[object String]'
const booleanTag = '[object Boolean]'
const dateTag = '[object Date]'
const regExpTag = '[object RegExp]'
const mapTag = '[object Map]'
const setTag = '[object Set]'
const functionTag = '[object Function]'
const arrayTag = '[object Array]'
// const argsTag = '[object Arguments]'

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

function getRef(refs: [any, any][], value: any) {
  return find(refs, (item) => item[0] === value)?.[1]
}

function initTypeObject(value: ObjectLike): object {
  let result: object | null = null
  const tag = getTag(value)
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
    default:
    // case objectTag:
    // case argsTag:
      result = initCloneObject(value)
  }
  return result as object
}

function cloneDeep(value: unknown, count?: { value: number }): any {
  if (value === null || typeof value !== 'object') return value

  const result = initTypeObject(value) as object
  const refs: [any, any][] = []
  const stack: [any, any][] = [[value, result]]

  while (stack.length) {
    // 临时计数
    count && (count.value += 1)

    const part = stack.shift() as [any, any]
    const source = part[0]
    const dist = part[1]
    refs.push(part)
    const tag = getTag(source) 

    if (tag === setTag) {
      source.forEach((item: any) => {
        const findRef = getRef(refs, item)
        if (findRef) {
          dist.add(findRef)
        } else if (item === null || typeof item !== 'object') {
          dist.add(item)
        } else {
          const newObject = initTypeObject(item)
          dist.add(newObject)

          stack.push([item, newObject])
        }
      })
    } else if (tag === mapTag) {
      source.forEach((item: any, key: any) => {
        const findRef = getRef(refs, item)
        if (findRef) {
          dist.set(key, findRef)
        } else if (item === null || typeof item !== 'object') {
          dist.set(key, item)
        } else {
          const newObject = initTypeObject(item)
          dist.set(key, newObject)

          stack.push([item, newObject])
        }
      })
    } else {
      const props = [...keys(source), ...getSymbols(source)]

      for (let i = 0; i < props.length; i++) {
        const key = props[i]
        const item = source[key]
        const findRef = getRef(refs, item)

        if (findRef) {
          dist[key] = findRef
        } else if (item === null || typeof item !== 'object') {
          dist[key] = item
        } else {
          dist[key] = initTypeObject(item)

          stack.push([item, dist[key]])
        }
      }
    }
  }

  return result
}

export default cloneDeep
