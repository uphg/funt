import findLastIndex from "./findLastIndex"
import type { FindIndexPredicate } from './_createFindIndexFunc'

function findLast(
  collection: Array<unknown>,
  predicate: FindIndexPredicate,
  fromIndex?: number
) {
  const index = findLastIndex(collection, predicate, fromIndex)
  return index === -1 ? undefined : collection[index]
}

export default findLast
