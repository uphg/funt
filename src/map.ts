import isArrayLike from './isArrayLike'

type MapObject<T> = { [key: string | symbol | number]: T } | ArrayLike<T> | Array<T>

function map<T>(
  obj: MapObject<T>,
  callback: (
    currentValue: T,
    index: number | string,
    obj: MapObject<T>,
  ) => any
): MapObject<T>{
  if (isArrayLike(obj)) {
    const length = obj?.length || 0
    const result = new Array(length) as T[]

    for (let i = 0; i < length; i++) {
      result[i] = callback(obj[i], i, obj)
    }

    return result
  } else {
    const keys = Object.keys(obj)
    const result = new Array(keys.length)
  
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i] as string
      result[i] = callback((obj as { [key: string | symbol | number]: T })[key], key, obj)
    }
  
    return result
  }
  
}

export default map
