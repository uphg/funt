import isLength from './isLength'

export default function remainPart(
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