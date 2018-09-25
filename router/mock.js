const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const router = new Router();


router.all('*', (ctx, next) => {
    const filePath = path.join(process.cwd(), 'mock', ctx.url, 'index.json');
    if (fs.existsSync(filePath)) {
        ctx.type = 'application/json';
        ctx.body = fs.readFileSync(filePath);
    }
    else {
        next();
    }
});

module.exports = router;