import { increment } from '.'
import { Lifeform } from './types'

export const randomNumOfMax = (max = 255): number => {
  return Math.floor(Math.random() * max)
}

export const randomColor = (): string => {
  return `rgb(${randomNumOfMax()},${randomNumOfMax()},${randomNumOfMax()})`
}

export const randomPower = (): number => {
  return randomNumOfMax(100)
}

export const randomSpeed = (): number => {
  return randomNumOfMax(10)
}

export const randomIncrement = (): number => {
  return Math.random() > 0.5 ? increment : -increment
}

export const shuffle = (array: any[]) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export const fillRect = (
  context: CanvasRenderingContext2D,
  lifeform: Lifeform,
) => {
  context.fillRect(lifeform.coords.x, lifeform.coords.y, increment, increment)
}
