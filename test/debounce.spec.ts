import { delay, debounce } from '../src/index'

describe('debounce', () => {
  beforeEach(() => {
    jest.useRealTimers()
  })

  it('is a function', () => {
    expect(typeof debounce).toBe('function')
  })

  it('debounce', (done) => {
    let counts = 0
    const increase = () => counts+=1

    const debouncedIncrease = debounce(increase, 32)

    debouncedIncrease(); debouncedIncrease()
    delay(debouncedIncrease, 16)
    delay(() => {
      expect(counts).toBe(1)
      done()
    }, 96)
  })

  it('debounce clear', (done) => {
    let counts = 0
    const increase = () => counts+=1
    
    const debouncedIncrease = debounce(increase, 32)

    debouncedIncrease()
    debouncedIncrease.cancel()

    delay(() => {
      expect(counts).toBe(0)
      done()
    }, 96)
  })

  it('immediate 为 true 时立即调用', (done) => {
    let counts = 0
    const fn = jest.fn(() => counts += 1)
    const debouncedFn = debounce(fn, 64, true)

    expect(debouncedFn()).toBe(1)
    expect(debouncedFn()).toBe(1)
    expect(fn.mock.calls.length).toBe(1)

    delay(debouncedFn, 16)
    delay(debouncedFn, 32)
    delay(() => {
      delay(finish, 90)
    }, 48)

    const finish = function() {
      expect(fn.mock.calls.length).toBe(1)
      done()
      expect(debouncedFn()).toBe(2)
      expect(fn.mock.calls.length).toBe(2)
    }
  })

  it('使用 immediate 立即调用时可清除', (done) => {
    let counts = 0
    const fn = jest.fn(() => counts += 1)
    const debouncedFn = debounce(fn, 64, true)

    expect(debouncedFn()).toBe(1)
    debouncedFn.cancel()
    expect(debouncedFn()).toBe(2)
    expect(fn.mock.calls.length).toBe(2)

    delay(debouncedFn, 16)
    delay(debouncedFn, 32)
    delay(debouncedFn, 48)
    delay(() => {
      expect(fn.mock.calls.length).toBe(2)
      done()
    }, 130)
  })

  it('立即调用 + 递归调用', (done) => {
    let counts = 0
    const fn = jest.fn(() => {
      counts += 1
      if (counts < 10) debouncedFn()
    })

    const debouncedFn = debounce(fn, 32, true)
    debouncedFn()
    expect(counts).toBe(1)
    delay(() => {
      expect(counts).toBe(1)
      done()
    }, 96)
  })

  it('系统时间向后设置', (done) => {
    const fn = jest.fn()
    const debouncedFn = debounce(fn, 100, true)
    const nativeGetTimeFun = Date.prototype.getTime
    const nativeNowFun = Date.now

    debouncedFn()
    expect(fn.mock.calls.length).toBe(1)

    Date.prototype.getTime = function() {
      return +(new Date(2013, 0, 1, 1, 1, 1))
    }
    Date.now = function() {
      return +(new Date(2013, 0, 1, 1, 1, 1))
    }

    delay(() => {
      debouncedFn()
      expect(fn.mock.calls.length).toBe(2)
      done()
      Date.prototype.getTime = nativeGetTimeFun
      Date.now = nativeNowFun
    }, 200)
  })

  it('无法访问系统时间或系统时间格式错误时', (done) => {
    const fn = jest.fn()
    const debouncedFn = debounce(fn, 100, true)
    
    const nativeNowFun = Date.now 
    const nativeGetTimeFun = Date.prototype.getTime
    const nativeValueOf = Date.prototype.valueOf

    debouncedFn()
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
      debouncedFn()
      expect(fn.mock.calls.length).toBe(2)

      Date.prototype.getTime = nativeNowFun
      Date.prototype.valueOf = nativeValueOf
      Date.now = nativeGetTimeFun
    }, 200)

    delay(() => {
      debouncedFn()
      expect(fn.mock.calls.length).toBe(3)
      done()
    }, 400)
  })

  it('防抖后可以自调用', (done) => {
    let values = []
    const sequence = [
      ['b1', 'b2']
    ]
    const fn = jest.fn(function(...args){
      values = values.concat([this, ...args])
      const _args = sequence.pop()
      if (_args) {
        debouncedFn.call(_args[0], _args[1])
      }
    })

    const debouncedFn = debounce(fn, 32)
    debouncedFn.call('a1', 'a2')

    expect(values).toEqual([])
    delay(() => {
      expect(values).toEqual(['a1', 'a2', 'b1', 'b2'])
      done()
    }, 102)
  })
})
