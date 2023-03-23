import isLength from './isLength'

// 根据给定参数分割数组，返回分割后的剩下的部分
// remain([1, 2, 3, 4, 5], 2, 1)
// => [1, 2, 4, 5]
function remain(
  array: unknown[],
  start: number,
  deleteCount?: number,
) {
  if (!isLength(start)) return []
  deleteCount = deleteCount || array.length - 1
  const newArray = []
  let index = -1

  while (++index < array.length) {
    if (index >= start && index < start + deleteCount) continue
    newArray.push(array[index])
  }

  return newArray
}

export default remain
