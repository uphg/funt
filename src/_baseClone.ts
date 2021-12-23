import find from './find'
import each from './each'
import createTypeObject from './internal/createTypeObject'
import type { ObjectLike } from './interfaces'
import getTag from './internal/getTag'

function getStack(stack: [any, any][], value: any) {
  return find(stack, (currentStack) => currentStack[0] === value)?.[1]
}

function baseClone(value: any, count?: any): any {
  if (value === null || typeof value !== 'object') return value
  const result = createTypeObject(value, getTag(value)) as ObjectLike
  const stack: any[] = []

  stack.push([value, result])
  const temp: [any, any][] = [[value, result]]

  while (temp.length) {
    // 临时计数
    count && (count.value += 1)

    const current = temp.shift()
    const source = current?.[0]
    const dist = current?.[1]

    switch (getTag(source)) {
      case 'Set':
        source.forEach((item: any) => {
          const findStack = getStack(stack, item)
          if (findStack) {
            dist.add(findStack)
          } else if (item === null || typeof item !== 'object') {
            dist.add(item)
          } else {
            const newObj = createTypeObject(item, getTag(item))
            dist.add(newObj)

            stack.push([item, newObj])
            temp.push([item, newObj])
          }
        });
        break
      case 'Map':
        source.forEach((item: any, key: any) => {
          const findStack = getStack(stack, item)
          if (findStack) {
            dist.set(key, findStack)
          } else if (item === null || typeof item !== 'object') {
            dist.set(key, item)
          } else {
            const newValue = createTypeObject(item, getTag(item))
            dist.set(key, newValue)

            stack.push([item, newValue])
            temp.push([item, newValue])
          }
        });
        break
      default:
        each(source, (item, key) => {
          const findStack = getStack(stack, item)
          if (findStack) {
            dist[key] = findStack
          } else if (item === null || typeof item !== 'object') {
            dist[key] = item
          } else {
            dist[key] = createTypeObject(item, getTag(item))
    
            stack.push([item, dist[key]])
            temp.push([item, dist[key]])
          }
        })
    }
  }

  return result
}

export default baseClone
