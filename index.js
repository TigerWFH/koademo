const logger = require('koa-logger');
const Koa  =require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(logger());

router.get('/', (ctx, next) => {
    ctx.body = '跟路径请求';
});

router.get('/path', (ctx, next) => {
    ctx.body = 'path';
});

router.get('/path/123', (ctx, next) => {
    ctx.body = 'path/123';
});

app.use(router.routes()).use(router.allowedMethods());

app.use((res) => {
    res.body = 'Hello World!';
});

app.listen(3002);
console.log("koa listen on port: 3002")
