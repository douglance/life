import { getRandomNeighbor, initLifeforms } from './lifeform'
import { fillRect, randomIncrement, shuffle } from './utils'

export const width = 1000
export const height = 1000
export const increment = 100
const lifeforms = initLifeforms(width, height)
console.log('🚀 ~ file: index.ts ~ line 7 ~ lifeforms', lifeforms)

const drawFrame = (): void => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    window.requestAnimationFrame(draw)
  }
}

const draw = (): void => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const context = canvas.getContext('2d', {
    alpha: false,
  }) as CanvasRenderingContext2D
  // context.clearRect(0, 0, canvas.width, canvas.height)
  lifeforms.forEach(lifeform => {
    context.fillStyle = lifeform.color
    fillRect(context, lifeform)
    const neighbor = getRandomNeighbor(lifeforms, lifeform.coords)
    const isSlower = neighbor.speed < lifeform.speed
    const isWeaker = lifeform.power > neighbor.power
    if (neighbor) {
      if (neighbor.id === lifeform.id)
        lifeform.power = lifeform.power + randomIncrement()

      if (isSlower && isWeaker) {
        lifeforms[lifeforms.indexOf(neighbor)] = {
          ...lifeform,
          coords: neighbor.coords,
        }
        fillRect(context, neighbor)
      } else {
        neighbor.speed++
      }
    }
  })
  shuffle(lifeforms)
  drawFrame()
}

const init = (): void => {
  drawFrame()
}
init()
