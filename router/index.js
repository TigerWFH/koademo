const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next) => {
    console.log("ctx===>", JSON.stringify(ctx));
    ctx.body = 'Hello World!';
});

module.exports = router;