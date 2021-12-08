import Emitter from '../src/emitter'

describe('eventEmitter', () => {
  it('is a function', () => {
    const eventBus = new Emitter()
    expect(Emitter).toBeInstanceOf(Function)

    expect(eventBus.on).toBeInstanceOf(Function)
    expect(eventBus.once).toBeInstanceOf(Function)
    expect(eventBus.emit).toBeInstanceOf(Function)
    expect(eventBus.off).toBeInstanceOf(Function)
    expect(eventBus.clear).toBeInstanceOf(Function)
  })
})
