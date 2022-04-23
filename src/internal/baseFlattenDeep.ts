import isFlattenable from './isFlattenable'

function baseFlattenDeep<T>(array: T[]) {
  const result = []
  const stack = [array]

  while (stack.length) {
    const part = stack.shift() as any
    for (let i = 0; i < part.length; i++) {
      const item = part[i]
      if (isFlattenable(item)) {
        stack.push(item as any)
      } else {
        result.push(item)
      }
    }
  }

  return result
}

export default baseFlattenDeep
