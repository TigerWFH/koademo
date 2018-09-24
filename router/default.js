const Router = require('koa-router');
const router = new Router();
const fs = require('fs');


router.all('*', (ctx, next) => {
    ctx.type = 'html';
    ctx.status = 404;
    ctx.body = fs.createReadStream(process.cwd() + '/public/404.html');
});

module.exports = router;