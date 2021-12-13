import findLastIndex from "./findLastIndex"

function findLast(
  array: Array<unknown>,
  callback: (currentValue: unknown, index: number, array: unknown[]) => boolean,
  fromIndex?: number
) {
  const index = findLastIndex(array, callback, fromIndex)
  return index === -1 ? undefined : array[index]
}

export default findLast
