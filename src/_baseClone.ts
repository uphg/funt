import type { ObjectLike } from './interfaces'
import isRegExp from './isRegExp'
import isFunction from './isFunction'
import isDate from './isDate'
import find from './find'
import each from './each'
import isArray from './isArray'

function createTypeObj(value: unknown) {
  let result: unknown = null
  if (isRegExp(value)) {
    result = new RegExp((value as RegExp).source, (value as RegExp).flags)
  } else if (isDate(value)) {
    result = new Date(value as Date)
  } else if (isFunction(value)) {
    result = function(this: any, ...args: unknown[]) {
      (value as () => any).apply<any, any[], any>(this, args)
    }
  } else if (isArray(value)) {
    result = new Array((value as []).length)
  } else {
    result = new Object()
  }
  return result
}

function getStack(stack: [any, any][], value: any) {
  return find(stack, (currentStack) => currentStack[0] === value)?.[1]
}

function baseClone(value: any, count?: any): any {
  if (value === null || typeof value !== 'object') return value
  const result = createTypeObj(value) as ObjectLike
  const stack: any[] = []

  stack.push([value, result])
  const temp: any = [[value, result]]

  while (temp.length) {
    // 临时计数
    count && (count.value += 1)

    const current = temp.shift() as any[]
    const source = current[0]
    const dist = current[1]

    each(source, (item, key) => {
      const findStack = getStack(stack, item)
      if(findStack) {
        dist[key] = findStack
      } else if (item === null || typeof item !== 'object') {
        dist[key] = item
      } else {
        dist[key] = createTypeObj(item)

        stack.push([item, dist[key]])
        temp.push([item, dist[key]])
      }
    })
  }

  return result
}

export default baseClone
