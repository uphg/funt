import type { ObjectLike } from 'src/interfaces'
import cloneRegExp from './cloneRegexp'

export default function createTypeObject(value: ObjectLike, tag: string) {
  let result: unknown = null
  const Constr = value.constructor as any
  switch (tag) {
    
    case 'Number':
    case 'String':
      result = new Constr(value)
      break
    case 'Boolean':
    case 'Date':
      result = new Constr(+value)
      break
    case 'RegExp':
      result = cloneRegExp(value as RegExp)
      break
    case 'Map':
    case 'Set':
      result = new Constr
      break
    case 'Function':
      result = function(this: any, ...args: unknown[]) {
        (value as (...args: any) => any).apply<any, any[], any>(this, args)
      }
      break
    case 'Array':
      result = new Array((value as []).length)
      break
    default:
      result = new Object()
  }

  return result
}
