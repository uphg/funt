import findLastIndex from "./findLastIndex"

function findLast(
  array: Array<unknown>,
  predicate: (arrayItem: unknown, index: number, array: unknown[]) => boolean,
  fromIndex?: number
) {
  const index = findLastIndex(array, predicate, fromIndex)
  return index === -1 ? undefined : array[index]
}

export default findLast
