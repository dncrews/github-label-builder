import * as Koa from 'koa'
import * as Router from '@koa/router'

import { svg } from './svg'
import { random } from './random'
import { favIconSVG } from './favicon'

const router = new Router()

export const app = new Koa()

const imageHandler = async ctx => {
  const { status, content } = ctx.params
  const isBig = Object.prototype.hasOwnProperty.call(ctx.request.query, 'big')

  ctx.generatedSVG = svg({ status, content, isBig })
  return
}

const favIcon = (ctx) => {
  ctx.generatedSVG = favIconSVG()
}

router.get('/favicon.ico', favIcon)
router.get('/:status/:content.svg', imageHandler)
router.get('/:status/:content/image.svg', imageHandler)
router.get('/', (ctx) => {
  (ctx as any).generatedSVG = random()
  return
})


const imageParser = async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    ctx.generatedSVG = svg({ status: 'blocking', content: `500: ${e.message}`, isBig: true })
  }

  if (!ctx.generatedSVG) {
    ctx.generatedSVG = svg({ status: 'blocking', content: '404: Button not found', isBig: true })
  }

  ctx.set('Content-Type', 'image/svg+xml')
  ctx.body = ctx.generatedSVG
  return
}

app
  .use(imageParser)
  .use(router.routes())
  .use(router.allowedMethods())