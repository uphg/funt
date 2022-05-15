import hasIn from '../hasIn'
import basePickBy from './basePickBy'
import { Keys } from './interfaces'

function basePick(obj: unknown, keys: Keys) {
  return basePickBy(obj, keys, (_value, key) => hasIn(obj, key))
}

export default basePick
