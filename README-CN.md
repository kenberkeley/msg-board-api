# 简易留言板 RESTful API
[![build status][travis-image]][travis-url]
[![Dependency Status][dep-image]][dep-url]
[![Coverage Status][cov-img]][cov-url]

## 主要用到的 Package
> 更多信息请看 `package.json`  
  
* [Express 4.x](https://github.com/expressjs/express)
* [Express Auto Routes](https://github.com/kenberkeley/express-auto-routes)（自动路由）
* [Lodash](https://github.com/lodash/lodash)
* [UUID](https://github.com/broofa/node-uuid)

****

## 环境要求
* Node ≥ 4
* NPM ≥ 3

****

## 快速开始
```
$ git clone https://github.com/kenberkeley/msg-board-api.git
$ cd msg-board-api
$ npm install
$ npm start

> msg-board-api@0.1.0 start /Users/kenberkeley/Documents/Desktop/msg-board-api
> node bin/start.js
[AutoMount] delete /msg/:msgId
[AutoMount] put /msg/:msgId
[AutoMount] get /msg/:msgId
[AutoMount] get /logout
[AutoMount] post /login
[AutoMount] get /user/
[AutoMount] post /msg/
[AutoMount] get /msg/
[INFO] Msg board RESTful API listening at localhost:8989
```

****

## APIs
> 见上

****

## JSON 数据格式
```
# 一个信息：
{
  "id":"4d48e8d0",
  "time":1465291755485,
  "author":"ken",
  "title":"hello world",
  "content":"welcome to msg-board-api"
}

# 用户 session：
{
  "username": "ken"
}

```

****


## 测试
> 请确认 [mocha](https://github.com/mochajs/mocha) 全局安装  
> 若无, `npm i mocha -g`

```
$ npm test
...
```

[travis-image]: https://secure.travis-ci.org/kenberkeley/msg-board-api.svg?branch=master
[travis-url]: https://travis-ci.org/kenberkeley/msg-board-api
[dep-image]: http://david-dm.org/kenberkeley/msg-board-api.svg?style=flat-square
[dep-url]: http://david-dm.org/kenberkeley/msg-board-api
[cov-img]: https://coveralls.io/repos/github/kenberkeley/msg-board-api/badge.svg?branch=master
[cov-url]: https://coveralls.io/github/kenberkeley/msg-board-api?branch=master
