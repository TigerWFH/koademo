const Logger = require('koa-logger');
const Koa  =require('koa');
const app = new Koa();

app.use(Logger((str, args) => {

}))

app.use((res) => {
    res.body = 'Hello World!';
});

app.listen(3002);
console.log("koa listen on port: 3002")
