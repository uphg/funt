export default function cloneMap(value: Map<any, any>) {
  const Constructor: any = value.constructor
  const newValue = new Constructor
  value.forEach((item, key) => {
    newValue.set(key, item)
  });
  return value
}
