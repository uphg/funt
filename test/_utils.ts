const symbol = Symbol('a')
const bigInt = BigInt(9007199254740991)

const getFunName = (fun) => {
  const source = fun.toString()
  const body = source.slice(9)
  return /^[^(]+/.exec(body)[0] || null
}

export { symbol, bigInt, getFunName }