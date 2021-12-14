// 返回数组中某项第一次出现的位置
export default function indexOf<T>(
  array: T[],
  value: T,
  fromIndex = 0
) {
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === value) return i
  }

  return -1
}
