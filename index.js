const logger = require('koa-logger');
const Koa = require('koa');
const fs = require('fs');

const app = new Koa();
// 路由
const index = require('./router');
const v1  = require('./router/v1');

try {
    app.use(logger());
    app.use(index.routes());
    app.use(v1.routes());
    app.listen(3002, () => {
        console.log("koa listen on port: 3002")
    });
}
catch (error) {
    let errLog = `${error.name},${error.message},${error.stack},${new Date()}`;
    fs.appendFileSync('./logs/error.log', errLog);
}
