import basePickBy from './internal/basePickBy'
import getSymbols from './internal/getSymobls'
import { PickByCallback } from './internal/types'
import isNil from './isNil'
import keys from './keys'

function pickBy<T extends object>(object: T, callback: PickByCallback<T>, withSymbol = false) {
  if (isNil(object)) return {}
  const _propNames = keys(object)
  const propNames = withSymbol ? (_propNames as (string | symbol)[]).concat(getSymbols(object)) : _propNames
  return basePickBy(object, propNames as Array<keyof T>, callback)
}

export default pickBy
