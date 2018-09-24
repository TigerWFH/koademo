const Router = require('koa-router');
const router = new Router();

router.all('*', (ctx, next) => {
    ctx.body = '404';
});

module.exports = router;