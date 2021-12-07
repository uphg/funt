import findLastIndex from "./findLastIndex"
import type { FindIndexPredicate } from './_createFindIndexFunc'

function findLast(
  array: Array<unknown>,
  predicate: FindIndexPredicate,
  fromIndex?: number
) {
  const index = findLastIndex(array, predicate, fromIndex)
  return index === -1 ? undefined : array[index]
}

export default findLast
