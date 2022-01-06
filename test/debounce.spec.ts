import { delay, debounce } from '../src/index'

describe('debounce', () => {
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
})
