function toMoney(value: unknown, mark = ',', defaultValue = '0') {
  if (!(typeof value === 'number' || typeof value === 'string')) return defaultValue
  const strings = typeof value === 'number' ? String(value) : value
  const numbers = strings.split('.')
  const int = numbers[0]
  const decimal = numbers?.[1]

  let index = int.length
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
