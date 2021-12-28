import find from './find'
import each from './each'
import type { ObjectLike } from 'src/interfaces'

const numberTag = '[object Number]'
const stringTag = '[object String]'
const booleanTag = '[object Boolean]'
const dateTag = '[object Date]'
const regExpTag = '[object RegExp]'
const mapTag = '[object Map]'
const setTag = '[object Set]'
const functionTag = '[object Function]'
const arrayTag = '[object Array]'

function getTag(value: unknown) {
  return Object.prototype.toString.call(value)
}

function initTypeObject(value: ObjectLike): object {
  let result: object | null = null
  const tag = getTag(value)
  const Constr = value.constructor as any
  switch (tag) {
    case numberTag:
    case stringTag:
      result = new Constr(value)
      break
    case booleanTag:
    case dateTag:
      result = new Constr(+value)
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
      result = new Array((value as []).length)
      break
    default:
      result = new Object()
  }

  return result as object
}

function getStack(stack: [any, any][], value: any) {
  return find(stack, (currentStack) => currentStack[0] === value)?.[1]
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

    switch (getTag(source)) {
      case setTag:
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
        break
      case mapTag:
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
        break
      default:
        each(source, (item, key) => {
          const findStack = getStack(stack, item)
          if (findStack) {
            dist[key] = findStack
          } else if (item === null || typeof item !== 'object') {
            dist[key] = item
          } else {
            dist[key] = initTypeObject(item)
    
            temp.push([item, dist[key]])
          }
        })
    }
  }

  return result
}

export default deepClone
