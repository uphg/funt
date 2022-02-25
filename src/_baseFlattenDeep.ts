import isFlattenable from './_isFlattenable'

function baseFlattenDeep<T=unknown>(array: T[]) {
  const result = []
  const stack = [array]

  while (stack.length) {
    const part = stack.shift() as T[]
    for (let i = 0; i < part.length; i++) {
      const item = part[i]
      if (isFlattenable(item)) {
        stack.push(item as unknown as T[])
      } else {
        result.push(item)
      }
    }
  }

  return result
}

export default baseFlattenDeep
