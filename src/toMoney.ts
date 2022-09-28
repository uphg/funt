function toMoney(value: unknown, mark = ',', defaultValue = '0') {
  if (!(typeof value === 'number' || typeof value === 'string')) return defaultValue
  const number = typeof value === 'number' ? String(value) : value
  const strings = number.split('.')
  const int = strings[0]
  const decimal = strings?.[1]
  const length = int.length
  let index = length
  let result = ''
  while (index > 0) {
    const part = int.slice(index > 3 ? index - 3 : 0, index)
    result = (index <= 3 ? '' : mark) + part + result
    index -= 3
  }
  result = result + (decimal ? `.${ decimal}` : '')

  return result
}

export default toMoney
