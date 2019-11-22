# 中间件篇
## koa-bodyparser：解析http消息体
* 网络传输会对字节流进行压缩，主流方式有：gzip，compress，deflate,identity
```
    服务器端会根据报文头信息中的Content-Encoding确认采用何种解码方式

    解码网络字节流后，需要将二进制数据转换成响应的字符，字符有不同的字符集以及对应的编码方式，服务端会根据报文头信息中的Content-Type使用的字符集以及对应编码方式对二进制流进行编码，解析出对应的字符

    字符串解析出来后，有可能会被客户端编码，例如
    URL安全字符编码encodeURIComponent：URL编码 
    或者JSON编码：application/json
    form表单enctype类型：
    1、application/x-www-form-urlencoded，使用encodeURIComponent对表单数据进行编码，get放在url上，post放在消息体
    2、application/json，使用JSON.stringify对表单数据进行编码
    3、multipart/form-data：一种上传文件的编码方式
    4、text/xml
```
## koa-static：指定静态资源路径
## koa-router：
## koa-session
## koa-jwt
## koa-logger
## koa-compress
## koa-views

# 工具篇
## nodemon 用于本地开发
## supervisor  用于开发环境

## pm2 用于测试、预发、生产环境，拥有完整的监控功能
## forever  用于管理多个站点，访问量小，不需要监控