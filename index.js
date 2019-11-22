const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');

const app = new Koa();
// 路由
const mock = require('./router/mock');
const router = require('./router/index');

let config = null;
if ("development" === process.env.NODE_ENV) {
    config = require('./config/default.json');
}
else {
    config = require('./config/prod.json');
}

try {
    app.use(logger());
    app.use(bodyParser());
    // 路由
    app.use(static(path.join(process.cwd(), '/public')));
    // app.use(mock.routes());
    app.use(router.routes());

    app.listen(config.server.port, () => {
        console.log(`server is running on ip: ${config.server.host},port:${config.server.port}`)
    });
}
catch (error) {
    let errLog = `${error.name},${error.message},${error.stack},${new Date()}`;
    fs.appendFileSync('./logs/error.log', errLog);
}
