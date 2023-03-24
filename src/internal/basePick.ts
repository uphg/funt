import has from '../has'
import basePickBy from './basePickBy'

function basePick<T extends object>(obj: T, keys: Array<keyof T>) {
  return basePickBy(obj, keys, (_value, key) => has(obj, key))
}

export default basePick
