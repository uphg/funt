import { delay, throttle } from '../src/index'

describe('throttle', () => {
  beforeEach(() => {
    jest.useRealTimers()
  })

  it('is a function', () => {
    expect(typeof throttle).toBe('function')
  })

  it('Throttling', (done) => {
    let counts = 0
    const fn = () => counts += 1
    const throttFn = throttle(fn, 32)

    throttFn(); throttFn()
    expect(counts).toBe(1)

    delay(() => {
      expect(counts).toBe(2)
      done()
    }, 64)
  })

  it('arguments', (done) => {
    let value = null
    const fn = (val) => { value = val }
    const throttledFn = throttle(fn, 32)

    throttledFn(1); throttledFn(2)
    expect(value).toBe(1)
    setTimeout(() => {
      expect(value).toBe(2)
      done()
    }, 64)
  })

  it('节流调用1次', (done) => {
    const fn = jest.fn(() => 5)
    const throttledFn = throttle(fn, 32)

    const result = throttledFn()
    setTimeout(() => {
      expect(fn.mock.calls.length).toBe(1)
      expect(result).toBe(5)
      done()
    }, 64)
  })

  it('节流调用2次', (done) => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 32)
    throttledFn(); throttledFn()
    setTimeout(() => {
      expect(fn.mock.calls.length).toBe(2)
      done()
    }, 64)
  })

  it('节流调用3次', (done) => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 32)
    throttledFn(); throttledFn(); throttledFn()
    setTimeout(() => {
      expect(fn.mock.calls.length).toBe(2)
      done()
    }, 64)
  })

  it('多次节流', (done) => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 32)
    throttledFn(); throttledFn()
    expect(fn.mock.calls.length).toBe(1)
    setTimeout(() => {
      expect(fn.mock.calls.length).toBe(2)
      throttledFn()
      expect(fn.mock.calls.length).toBe(3)
      done()
    }, 96)
  })

  it('return 也会多次节流', (done) => {
    let counts = 0
    const fn = () => counts += 1
    const throttledFn = throttle(fn, 100)

    const results = []
    const addResult = () => { results.push(throttledFn()) }
    addResult(); addResult()
    delay(addResult, 50)
    delay(addResult, 150)
    delay(addResult, 170)
    delay(addResult, 230)
    delay(() => {
      expect(results[0]).toBe(1)
      expect(results[1]).toBe(1)
      expect(results[2]).toBe(1)
      expect(results[3]).toBe(2)
      expect(results[4]).toBe(2)
      expect(results[5]).toBe(3)
      done()
    }, 300)
  })

  it('多次后触发延时调用', (done) => {
    let counts = 0
    const fn = () => { counts += 1 }
    const throttledFn = throttle(fn, 32)
    const limit = 48
    const stamp = +new Date()
    
    while ((+new Date() - stamp) < limit) {
      throttledFn()
    }

    const lastCount = counts

    // lastCount > 1
    expect(lastCount).toBeGreaterThan(1)
    delay(() => {
      // counts > lastCount
      expect(counts).toBeGreaterThan(lastCount)
      done()
    }, 96)
  })

  it('当 leading 设置为 false 时不会触发首次调用', (done) => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 32, { leading: false })
    
    throttledFn(); throttledFn()
    delay(() => {
      expect(fn.mock.calls.length).toBe(1)
      done()
    }, 64)
  })

  it('当 leading: false 时多次节流都不会触发首次调用', (done) => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 100, { leading: false })
    throttledFn()
    delay(throttledFn, 50)
    delay(throttledFn, 70)
    delay(throttledFn, 200)

    expect(fn.mock.calls.length).toBe(0)

    delay(() => {
      expect(fn.mock.calls.length).toBe(1)
    }, 260)

    delay(() => {
      expect(fn.mock.calls.length).toBe(2)
      done()
    }, 370)
  })

  it('更多的 leading: false 测试', (done) => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 100, { leading: false })
    
    const stamp = +new Date()

    while (+new Date() - stamp < 360) {
      throttledFn()
    }

    expect(fn.mock.calls.length).toBe(3)
    delay(() => {
      expect(fn.mock.calls.length).toBe(4)
      done()
    }, 200)
  })

  it('当 trailing 设置为 false 时，throttle 不会触发最后一次延时调用', (done) => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 60, { trailing: false })

    throttledFn(); throttledFn(); throttledFn()
    expect(fn.mock.calls.length).toBe(1)

    delay(() => {
      expect(fn.mock.calls.length).toBe(1)
      throttledFn(); throttledFn()
      expect(fn.mock.calls.length).toBe(2)
      delay(() => {
        expect(fn.mock.calls.length).toBe(2)
        done()
      }, 90)
    }, 90)
  })

  it('系统时间被修改时 throttle 函数会继续运行', (done) => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 100)
    
    const nativeNowFun = Date.now 
    const nativeGetTimeFun = Date.prototype.getTime

    throttledFn()
    expect(fn.mock.calls.length).toBe(1)

    Date.prototype.getTime = function() {
      return +(new Date(2013, 0, 1, 1, 1, 1))
    }
    Date.now = function() {
      return +(new Date(2013, 0, 1, 1, 1, 1))
    }

    delay(() => {
      throttledFn()
      expect(fn.mock.calls.length).toBe(2)
      done()

      Date.prototype.getTime = nativeNowFun
      Date.now = nativeGetTimeFun
    }, 200)
  })

  it('系统时间不可访问时 throttle 函数会继续运行', (done) => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 100)
    
    const nativeNowFun = Date.now 
    const nativeGetTimeFun = Date.prototype.getTime
    const nativeValueOf = Date.prototype.valueOf

    throttledFn()
    expect(fn.mock.calls.length).toBe(1)

    Date.prototype.getTime = function() {
      return null
    }
    Date.prototype.valueOf = function() {
      return null
    }
    Date.now = function() {
      return null
    }

    delay(() => {
      throttledFn()
      expect(fn.mock.calls.length).toBe(2)

      Date.prototype.getTime = nativeNowFun
      Date.prototype.valueOf = nativeValueOf
      Date.now = nativeGetTimeFun
    }, 200)

    delay(() => {
      throttledFn()
      expect(fn.mock.calls.length).toBe(3)
      done()
    }, 400)
  })

  it('节流后可以自调用', (done) => {
    let values = []
    const sequence = [
      ['b1', 'b2'],
      ['c1', 'c2']
    ]
    const fn = jest.fn(function(...args){
      values = values.concat([this, ...args])
      const _args = sequence.pop()
      if (_args) {
        throttledFn.call(_args[0], _args[1])
      }
    })

    const throttledFn = throttle(fn, 32)

    throttledFn.call('a1', 'a2')
    expect(values).toEqual(['a1', 'a2'])

    delay(() => {
      expect(values).toEqual(['a1', 'a2', 'c1', 'c2', 'b1', 'b2'])
      done()
    }, 102)
  })

  it('可以取消节流', (done) => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 32)
    throttledFn()
    throttledFn.cancel()
    throttledFn()
    throttledFn()
    expect(fn.mock.calls.length).toBe(2)

    delay(() => {
      expect(fn.mock.calls.length).toBe(3)
      done()
    }, 64)
  })

  it('leading: false 时取消延时调用', (done) => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 32, { leading: false })
    throttledFn()
    throttledFn.cancel()

    delay(() => {
      expect(fn.mock.calls.length).toBe(0)
      done()
    }, 64)
  })
})
