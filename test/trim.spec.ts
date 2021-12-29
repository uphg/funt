import { trim } from '../src/index'

describe('trim', () => {
  it('is a function', () => {
    expect(typeof trim).toBe('function')
  })

  it('Remove the spaces on both sides of the string', () => {
    expect(trim(' 123 ')).toBe('123')
    expect(trim(`
    hi
    `)).toBe('hi')
  })
})
