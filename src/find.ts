import findIndex from "./findIndex"
import type { FindIndexPredicate } from './_createFindIndexFunc'

function find(
  collection: Array<unknown>,
  predicate: FindIndexPredicate,
  fromIndex?: number
) {
  const index = findIndex(collection, predicate, fromIndex)
  return index === -1 ? undefined : collection[index]
}

export default find
