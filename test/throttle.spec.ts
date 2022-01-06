import { delay, throttle } from '../src/index'

describe('throttle', () => {
  it('is a function', () => {
    expect(typeof throttle === 'function').toBe(true)
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
})
