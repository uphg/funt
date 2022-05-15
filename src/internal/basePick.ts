import has from '../has'
import basePickBy from './basePickBy'
import { Key } from './interfaces'

function basePick(obj: unknown, keys: Key[]) {
  return basePickBy(obj, keys, (_value, key) => has(obj, key))
}

export default basePick
