import toInteger from './toInteger';

// 以指定大小分割数组
export default function chunk<T>(array: T[], size=1) {
  size = Math.max(toInteger(size), 0) // 过滤负值
  const length = (array === null || array === void 0 ? 0 : array.length)

  if (!length || size < 1) return []

  const result = new Array(Math.ceil(length / size))
  let [index, resIndex] = [0, 0]

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }

  return result
}
