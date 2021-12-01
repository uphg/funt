type FindIndexCollection = Array<unknown>
interface FindIndexPredicate {
  (collectionItem: unknown, index: number, collection: FindIndexCollection): boolean
} 

export declare function createFindIndexFunc(direction: 'first' | 'last'): (
  collection: FindIndexCollection,
  predicate: FindIndexPredicate,
  fromIndex: number
) => {};