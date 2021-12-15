import isLength from './isLength'

// 根据给定参数分割数组，返回分割后的剩下的部分
export default function remain(
  array: any[],
  start: number,
  deleteCount?: number,
) {
  if (!isLength(start)) return []
  deleteCount = deleteCount || array.length - 1
  const newArray = []
  
  for (let i = 0; i < array.length; i++) {
    if (i >= start && i < start + deleteCount) continue
    newArray.push(array[i])
  }

  return newArray
}