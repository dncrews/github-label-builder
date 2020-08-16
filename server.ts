import * as Koa from 'koa'
import * as Router from '@koa/router';

import { svg } from './svg'

const router = new Router()

export const app = new Koa()

const imageHandler = async ctx => {
  const { style, text } = ctx.params;
  const isBig = Object.prototype.hasOwnProperty.call(ctx.request.query, 'big');
  const isWide = Object.prototype.hasOwnProperty.call(ctx.request.query, 'wide');

  try {
    const body = svg({ style, text, isBig, isWide });

    ctx.set('Content-Type', 'image/svg+xml');
    ctx.body = body;
    return;
  } catch (e) {
    return ctx.throw(404, e.message);
  }
};

// router.get('/:style/:text/image.svg', async ctx => {
router.get('/:style/:text.svg', imageHandler);
router.get('/:style/:text/image.svg', imageHandler);

app
  .use(router.routes())
  .use(router.allowedMethods());