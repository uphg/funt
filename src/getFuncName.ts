import trim from './trim'

// 根据函数体返回字符串格式的函数名（无法获取箭头函数函数名）
export default function getFuncName(functionBody: any): string | undefined {
  const source = functionBody.toString()
  const body = source.slice(9)
  const name = /^[^(]+/.exec(body)?.[0]
  return trim(name)
}
