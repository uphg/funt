import findIndex from "./findIndex"

const find = (collection, predicate, fromIndex) => {
  const index = findIndex(collection, predicate, fromIndex)
  return index === -1 && collection[index]
} 

export default find
