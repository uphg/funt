// 返回数组中某项最后一次出现的位置
export default function lastIndexOf<T>(
  array: T[],
  value: T,
  fromIndex: number = array.length - 1
) {
  for (let i = fromIndex; i > 0; i--) {
    if (array[i] === value) return i
  }

  return -1
}