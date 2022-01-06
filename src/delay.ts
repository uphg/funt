function delay(func: Function, wait: number, ...args: unknown[]) {
  return setTimeout(func, +wait || 0, ...args)
}

export default delay
