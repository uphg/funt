import isArray from './isArray'
import isObjectLike from './isObjectLike'
import type { ObjectLike } from './interfaces'
import isRegExp from './isRegExp'
import isFunction from './isFunction'
import isDate from './isDate'
import find from './find'

const isBaseType = (value: unknown) => {
  return value === undefined
  || value === null
  || typeof value === 'string'
  || typeof value === 'boolean'
  || typeof value === 'number'
  || typeof value === 'bigint'
  || typeof value === 'symbol'
}

function baseClone(value: unknown, stack: any[] = []): any {
  if (isBaseType(value)) return value

  let dist: ObjectLike | null = null
  if (isObjectLike(value)) {
    const findStack = find(stack, (item) => item[0] === value)?.[1]

    if (findStack) {
      return findStack
    } else if (isRegExp(value)) {
      dist = new RegExp((value as RegExp).source, (value as RegExp).flags)
    } else if (isDate(value)) {
      dist = new Date(value as Date)
    } else if (isFunction(value)) {
      dist = function(this: any, ...args: unknown[]) {
        (value as () => any).apply<any, any[], any>(this, args)
      }
    } else if (isArray(value)) {
      dist = new Array((value as any[]).length)
    } else if (isObjectLike(value)) {
      dist = new Object()
    }

    stack.push([value, dist])

    for (const item in (value as ObjectLike)) {
      if (Object.prototype.hasOwnProperty.call(value, item)) {
        (dist as ObjectLike)[item] = baseClone((value as ObjectLike)[item], stack)
      }
    }
    return dist
  }

  return value
}

export default baseClone
