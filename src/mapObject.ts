export default function mapObject<T>(
  object: { [key: string]: T },
  callback: (
    currentValue?: T,
    index?: number | string,
    object?: { [key: string]: T }
  ) => any
): (number | T)[] {
  const keys = Object.keys(object)
  const result = new Array(keys.length)

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    result[i] = callback(object[key], key, object)
  }

  return result
}