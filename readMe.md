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

# 其它
## Cache-Control：操作http缓存指令，可以有多个指令，可用于request和response
* no-cache：request-强制向服务器进行验证;response-使用缓存前必须先确认其有效性（不缓存过期的）
* no-store：request-不缓存请求或响应的内容;response-不缓存请求或响应的内容
* max-age=[秒]：request-响应的最大age值，缓存没有超过该时间，ua可以使用;response-响应的最大age值，缓存没有超过该时间，不用找我请求
* no-transform：request-代理不可更改媒体类型;response-代理不可更改媒体类型
* cache-extension：request-新指令标记;response-新指令标记

* min-fresh=[秒]：request-期望在指定时间内的响应仍有效
* max-stale=[秒]：request-接收已过期的响应
* only-if-cached：request-从缓存获取资源

* public：response-任意client可以缓存该响应
* private：response-仅向特定用户返回响应
* must-revalidate：可缓存但必须再向源服务器进行确认
* proxy-revalidate：要求中间缓存服务器对缓存的响应有效性再进行确认
* s-maxage=[秒]：公共缓存服务器响应的最大Age值（优先级高于max-age，expires）