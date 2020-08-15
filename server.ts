import Koa from 'koa'
import Router from '@koa/router';

import { svg } from './svg'

const router = new Router()

export const app = new Koa()

router.get('/:style/:text/image.svg', async ctx => {
  const { style, text } = ctx.params;
  const isBig = Object.prototype.hasOwnProperty.call(ctx.request.query, 'big');
  const isWide = Object.prototype.hasOwnProperty.call(ctx.request.query, 'wide');

  try {
    const body = svg({ style, text, isBig, isWide });

    ctx.header.contentType = 'image/svg+xml'
    ctx.body = body;
    return;
  } catch (e) {
    return ctx.throw(404, e.message);
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());