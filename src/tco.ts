// tailCallOptimize 尾递归优化函数
export default function tco(func: (...args: any) => any) {
  let returnValue: any = void 0
  let active = false
  const accumulated: any[] = []
  return function(this: any,...args: any) {
    accumulated.push(args)
    if (!active) {
      active = true
      while (accumulated.length) {
        returnValue = func.apply(this, accumulated.shift())
      }
      active = false
      return returnValue
    }
  }
}
