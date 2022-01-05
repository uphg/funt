import { now } from '../src/index'

describe('now', () => {
  it('is a function', () => {
    expect(typeof now).toBe('function')
  })

  it('返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数', (done) => {
    const stamp = +new Date
    const actual = now()

    expect(actual >= stamp).toBe(true)

    setTimeout(() => {
      expect(now() > actual).toBe(true)
      done()
    }, 32)
  })
})
