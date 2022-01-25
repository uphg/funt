import isFlattenable from './_isFlattenable'
import baseFlattenDeep from './_baseFlattenDeep'

function baseFlatten<T>(array: T[], callback: Function, isDeep = false) {
  const length = array?.length || 0
  const result = []
  for (let i = 0; i < length; i++) {
    const item = callback(array[i], i, array)
    if (isFlattenable(item)) {
      isDeep ? result.push(...baseFlattenDeep(item)) : result.push(...item)
    } else {
      result.push(item)
    }
  }
  return result
}

export default baseFlatten
