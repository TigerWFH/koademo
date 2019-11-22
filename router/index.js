const fs = require('fs');
const Router = require('koa-router');
const router = new Router({
    prefix: '/api'
});

router.get('/signup', (ctx, next) => {
    ctx.body = 'signup';
});

router.get('/signin', (ctx, next) => {
    ctx.body = 'singin';
});

router.all('*', (ctx, next) => {
    ctx.type = 'html';
    ctx.status = 404;
    ctx.body = fs.createReadStream(process.cwd() + '/public/404.html');
});
module.exports = router;
