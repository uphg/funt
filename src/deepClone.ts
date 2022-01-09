import find from './find'
import keys from './keys'
import getSymbols from './getSymobls'
import getTag from './_getTag'
import initCloneObject from './_initCloneObject'
import cloneArrayBuffer from './_cloneArrayBuffer'
import cloneDataView from './_cloneDataView'
import cloneTypedArray from './_cloneTypedArray'

import type { ObjectLike, TypedArray } from 'src/_interfaces'

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

function getStack(stack: [any, any][], value: any) {
  return find(stack, (currentStack) => currentStack[0] === value)?.[1]
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
        (value as (...args: any) => any).apply<any, any[], any>(this, args)
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

function deepClone(value: unknown, count?: { value: number }): any {
  if (value === null || typeof value !== 'object') return value

  const result = initTypeObject(value) as object
  const stack: [any, any][] = []
  const temp: [any, any][] = [[value, result]]

  while (temp.length) {
    // 临时计数
    count && (count.value += 1)

    const current = temp.shift() as [any, any]
    const source = current[0]
    const dist = current[1]
    stack.push(current)
    const tag = getTag(source) 

    if (tag === setTag) {
      source.forEach((item: any) => {
        const findStack = getStack(stack, item)
        if (findStack) {
          dist.add(findStack)
        } else if (item === null || typeof item !== 'object') {
          dist.add(item)
        } else {
          const newObject = initTypeObject(item)
          dist.add(newObject)

          temp.push([item, newObject])
        }
      })
    } else if (tag === mapTag) {
      source.forEach((item: any, key: any) => {
        const findStack = getStack(stack, item)
        if (findStack) {
          dist.set(key, findStack)
        } else if (item === null || typeof item !== 'object') {
          dist.set(key, item)
        } else {
          const newObject = initTypeObject(item)
          dist.set(key, newObject)

          temp.push([item, newObject])
        }
      })
    } else {
      const props = [...keys(source), ...getSymbols(source)]

      for (let i = 0; i < props.length; i++) {
        const key = props[i]
        const item = source[key]
        const findStack = getStack(stack, item)

        if (findStack) {
          dist[key] = findStack
        } else if (item === null || typeof item !== 'object') {
          dist[key] = item
        } else {
          dist[key] = initTypeObject(item)

          temp.push([item, dist[key]])
        }
      }
    }
  }

  return result
}

export default deepClone
