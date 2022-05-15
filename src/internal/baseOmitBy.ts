import keys from '../keys'
import getSymbols from './getSymobls'
import { Key } from './interfaces'

function baseOmitBy(object: any, callback: (value: unknown, key: Key) => boolean) {
  const props: Key[] = keys(object).concat(getSymbols(object) as any)
  let index = -1
  const length = props.length
  const result: { [k: Key]: unknown } = {}
  while (++index < length) {
    const key = props[index]
    const value = object[key]
    if (callback(value, key)) {
      continue
    }
    result[key] = value
  }
  return result
}

export default baseOmitBy
