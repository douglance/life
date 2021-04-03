import {
  getLifeformAtCoords,
  getNorthNeighbor,
  initLifeforms,
} from './lifeform'

describe('lifeform', () => {
  test('getNorthNeighbor', async () => {
    const lifeforms = initLifeforms(1000, 1000)
    const lifeform = getLifeformAtCoords(lifeforms, { x: 0, y: 0 })
    const northNeighbor = getNorthNeighbor(lifeforms, lifeform)
    expect(northNeighbor.coords).toStrictEqual({ x: 0, y: 1000 })
  })
})
