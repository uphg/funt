import isFlattenable from './isFlattenable'
import { RecursiveArray } from '../types'

function baseFlattenDeep<T>(array: Array<RecursiveArray<T>>) {
  const result: T[] = []
  const stack = [array]

  while (stack.length) {
    const temp = stack.shift()!
    let index = -1
    while (++index < temp.length) {
      const item = temp[index]
      isFlattenable(item)
        ? stack.push(item as RecursiveArray<T>[])
        : result.push(item as T)
    }
  }

  return result
}

export default baseFlattenDeep
