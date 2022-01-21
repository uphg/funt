import { tailCall } from '../src/index'

describe('tco', () => {
  it('is a function', () => {
    expect(typeof tailCall).toBe('function')
  })

  it('Optimize tail recursive function', () => {
    const sum = tailCall(function(x, y) {
      return y > 0 ? sum(x + 1, y - 1) : x
    })
    
    expect(sum(1, 100000)).toBe(100001)
  })
})
