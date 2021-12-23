import isArray from './isArray'
import type { ObjectLike } from './interfaces'
import isRegExp from './isRegExp'
import isFunction from './isFunction'
import isDate from './isDate'
import find from './find'
import each from './each'

function createTypeObj(value: any) {
  let dist: any = null
  if (isRegExp(value)) {
    dist = new RegExp((value as RegExp).source, (value as RegExp).flags)
  } else if (isDate(value)) {
    dist = new Date(value as Date)
  } else if (isFunction(value)) {
    dist = function(this: any, ...args: unknown[]) {
      (value as () => any).apply<any, any[], any>(this, args)
    }
  } else if (isArray(value)) {
    dist = new Array((value as any[]).length)
  } else {
    dist = new Object()
  }
  return dist
}

function baseClone(value: any, count?: any): any {
  if (value === null || typeof value !== 'object') return value
  const dist: ObjectLike = createTypeObj(value)
  const stack: any[] = []

  const temp: any = [
    [value, dist]
  ]

  while (temp.length) {
    // 临时计数
    count && (count.value += 1)

    const current = temp.shift() as any[]
    const source = current[0]
    const copy = current[1]

    stack.push([source, copy])

    each(source, (item, key) => {
      const findStack = find(stack, (currentStack) => currentStack[0] === item)?.[1]

      if(findStack) {
        copy[key] = findStack
      } else if (item === null || typeof item !== 'object') {
        copy[key] = item
      } else {
        copy[key] = createTypeObj(item)

        stack.push([item, copy[key]])
        temp.push([item, copy[key]])
      }
    })
  }

  return dist
}

export default baseClone
