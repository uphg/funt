function delay<T extends TimerHandler, A extends unknown[]>(func: T, wait: number, ...args: A) {
  return setTimeout(func, +wait || 0, ...args)
}

export default delay
