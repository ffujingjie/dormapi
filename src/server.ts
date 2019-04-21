// import * as express from 'express';

// const app = express(); // 用于声明服务器端所能提供的http服务

// // 声明一个处理get请求的服务
// app.get('/', (req, resp) => {
//     resp.send("Hello Express");
// });

// app.get("/products", (req, resp) => {
//     resp.send("接收到商品查询请求");
// });

// const server = app.listen(8000, "localhost", () => {
//     console.log("服务器已启动, 地址是：http://localhost:8000");
// });
/**  */
// var express = require('express');
// var app = express();

// app.get('/', function (req, res){
//     res.send('hello world!');
// });

// app.listen(3000, function(){
//     console.log('Example app listening on port 3000');
// })

import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});