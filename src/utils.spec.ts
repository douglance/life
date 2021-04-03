import { randomIncrement } from './utils'

describe('utils', () => {
  test('randomNegativeOrPositiveOne', async () => {
    const value = randomIncrement()
    expect(value).toBeGreaterThanOrEqual(-10)
    expect(value).toBeLessThanOrEqual(10)
  })
})
