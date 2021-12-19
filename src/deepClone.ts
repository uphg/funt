import baseClone from './_baseClone'

function deepClone(value: unknown) {
  const stack: any[] = [] 
  return baseClone(value, stack)
}

export default deepClone
