// 根据函数体返回字符串格式的函数名（无法获取箭头函数函数名）
export default function getFunName(functionBody: any): string | null {
  const source = functionBody.toString()
  const body = source.slice(9)
  return /^[^(]+/.exec(body)?.[0] || null
}
