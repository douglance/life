import { v4 } from 'uuid'
import { height, increment, width } from '.'
import { Coords, Lifeform } from './types'
import { randomColor, randomPower, randomSpeed } from './utils'

const createLifeform = (x: number, y: number): Lifeform => ({
  id: v4(),
  coords: { x, y },
  color: randomColor(),
  power: randomPower(),
  speed: randomSpeed(),
})

export const getLifeformAtCoords = (
  lifeforms: Lifeform[],
  { x, y }: Coords,
) => {
  return lifeforms.filter(l => l.coords.x === x && l.coords.y === y)[0]
}

export const getNorthNeighbor = (
  lifeforms: Lifeform[],
  lifeform: Lifeform,
): Lifeform => {
  const x = lifeform.coords.x
  const y = lifeform.coords.y ? lifeform.coords.y - increment : height
  return getLifeformAtCoords(lifeforms, { x, y })
}
export const getSouthNeighbor = (
  lifeforms: Lifeform[],
  lifeform: Lifeform,
): Lifeform => {
  const x = lifeform.coords.x
  const y = lifeform.coords.y < height ? lifeform.coords.y + increment : 0
  return getLifeformAtCoords(lifeforms, { x, y })
}

export const getEastNeighbor = (
  lifeforms: Lifeform[],
  lifeform: Lifeform,
): Lifeform => {
  const x = lifeform.coords.x ? lifeform.coords.x - increment : width
  const y = lifeform.coords.y
  return getLifeformAtCoords(lifeforms, { x, y })
}
export const getWestNeighbor = (
  lifeforms: Lifeform[],
  lifeform: Lifeform,
): Lifeform => {
  const x = lifeform.coords.x < width ? lifeform.coords.x + increment : 0
  const y = lifeform.coords.y
  return getLifeformAtCoords(lifeforms, { x, y })
}

const getRandomNeighborGetters = () => {
  const randomNeighborGetters = [
    getNorthNeighbor,
    getSouthNeighbor,
    getEastNeighbor,
    getWestNeighbor,
  ]
  return randomNeighborGetters[
    Math.floor(Math.random() * randomNeighborGetters.length)
  ]
}

export const getRandomNeighbor = (
  lifeforms: Lifeform[],
  coords: Coords,
): Lifeform => {
  return getRandomNeighborGetters()(
    lifeforms,
    getLifeformAtCoords(lifeforms, coords),
  )
}

export const initLifeforms = (width: number, height: number): Lifeform[] => {
  const lifeforms = []
  for (let x = 0; x <= width; x = x + increment) {
    for (let y = 0; y <= height; y = y + increment) {
      lifeforms.push(createLifeform(x, y))
    }
  }
  return lifeforms
}
export { createLifeform }
