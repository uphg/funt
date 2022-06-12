import methodsDefault from './index.default'

// Collection
export { default as cloneDeep } from './cloneDeep'
export { default as each } from './each'
export { default as map } from './map'

// array
export { default as chunk } from './chunk'
export { default as compact } from './compact'
export { default as flatMap } from './flatMap'
export { default as flatMapDeep } from './flatMapDeep'
export { default as flatten } from './flatten'
export { default as flattenDeep } from './flattenDeep'
export { default as uniq } from './uniq'
export { default as find } from './find'
export { default as findIndex } from './findIndex'
export { default as findLast } from './findLast'
export { default as findLastIndex } from './findLastIndex'
export { default as indexOf } from './indexOf'
export { default as lastIndexOf } from './lastIndexOf'
export { default as remain } from './remain'
export { default as tail } from './tail'

// 类型判断
export { default as eq } from './eq'
export { default as isBoolean } from './isBoolean'
export { default as isString } from './isString'
export { default as isNumber } from './isNumber'
export { default as isBigInt } from './isBigInt'
export { default as isSymbol } from './isSymbol'
export { default as isFunction } from './isFunction'
export { default as isObject } from './isObject'
export { default as isObjectLike } from './isObjectLike'
export { default as isArray } from './isArray'
export { default as isArrayLike } from './isArrayLike'
export { default as isArrayLikeObject } from './isArrayLikeObject'
export { default as isArguments } from './isArguments'
export { default as isArrayBuffer } from './isArrayBuffer'
export { default as isError } from './isError'
export { default as isDate } from './isDate'
export { default as isRegExp } from './isRegExp'
export { default as isNaN } from './isNaN'
export { default as isNil } from './isNil' 
export { default as isFinite } from './isFinite'
export { default as isInteger } from './isInteger'
export { default as isLength } from './isLength'
export { default as isPlainObject } from './isPlainObject'
export { default as isMap } from './isMap'
export { default as isWeakMap } from './isWeakMap'
export { default as isSet } from './isSet'
export { default as isWeakSet } from './isWeakSet'

// 类型转换
export { default as toFinite } from './toFinite'
export { default as toInteger } from './toInteger'
export { default as toNumber } from './toNumber'
export { default as toLength } from './toLength'
export { default as toArray } from './toArray'

// string
export { default as trim } from './trim'

// Object
export { default as create } from './create'
export { default as keys } from './keys'
export { default as values } from './values'
export { default as has } from './has'
export { default as hasIn } from './hasIn'
export { default as pick } from './pick'
export { default as pickBy } from './pickBy'
export { default as omit } from './omit'
export { default as omitBy } from './omitBy'

// Function
export { default as debounce } from './debounce'
export { default as throttle } from './throttle'
export { default as delay } from './delay'

// Date
export { default as now } from './now'

export default methodsDefault
