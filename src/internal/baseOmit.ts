import indexOf from '../indexOf'
import baseOmitBy from './baseOmitBy'
import { Key } from './interfaces'

function baseOmit(object: any, excludes: Key[]) {
  return baseOmitBy(object, (_value, key) => indexOf(excludes, key) !== -1)
}

export default baseOmit
