const fs = require('fs');
const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
// 路由
const index = require('./router');
const v1  = require('./router/v1');
const all = require('./router/default');
const mock = require('./router/mock');

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
    app.use(mock.routes());
    app.use(index.routes());
    app.use(v1.routes());
    app.use(all.routes());

    app.listen(config.server.port, () => {
        console.log(`server is running on ip: ${config.server.host},port:${config.server.port}`)
    });
}
catch (error) {
    let errLog = `${error.name},${error.message},${error.stack},${new Date()}`;
    fs.appendFileSync('./logs/error.log', errLog);
}
