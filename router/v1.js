const Router = require('koa-router');
const router = new Router({
    prefix: '/v1'
});

router.get('/signup', (ctx, next) => {
    ctx.body = 'signup';
});

module.exports = router;
