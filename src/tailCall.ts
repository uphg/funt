// tailCallOptimize 尾递归优化函数
function tailCall<T extends Function>(func: T) {
  let result: unknown = void 0
  let active = false
  const accumulated: unknown[] = []
  return function(this: unknown, ...args: unknown[]) {
    accumulated.push(args)
    if (!active) {
      active = true
      while (accumulated.length) {
        result = func.apply(this, accumulated.shift())
      }
      active = false
      return result
    }
  }
}

export default tailCall
