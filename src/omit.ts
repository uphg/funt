import includes from './includes'
import basePickBy from './internal/basePickBy'
import getSymbols from './internal/getSymobls'
import isNil from './isNil'
import keys from './keys'

function omit<T extends object>(object: T, excludes: Array<keyof T>, withSymbol = false) {
  if (isNil(object)) return {}
  const _propNames = keys(object)
  const propNames = (
    withSymbol
      ? (_propNames as (string | symbol)[]).concat(getSymbols(object))
      : _propNames
  ) as Array<keyof T>
  return basePickBy(object, propNames, (_, key) => !includes(excludes, key))
}

export default omit
