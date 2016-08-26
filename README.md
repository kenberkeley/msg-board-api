# A Simple Message Board RESTful API
[![build status][travis-image]][travis-url]
[![Dependency Status][dep-image]][dep-url]
[![Coverage Status][cov-img]][cov-url]

> 中文介绍点击 [这里](./README-CN.md)

## Features
> More Detail in `package.json`  
  
* [Express 4.x](https://github.com/expressjs/express)
* [Express Auto Routes](https://github.com/kenberkeley/express-auto-routes)
* [Lodash](https://github.com/lodash/lodash)
* [UUID](https://github.com/broofa/node-uuid)

****

## Requirements
* Node ≥ 4
* NPM ≥ 3

****

## Getting Start
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
> Showed as above

****

## JSON Format
```
# A message example:
{
  "id":"4d48e8d0",
  "time":1465291755485,
  "author":"ken",
  "title":"hello world",
  "content":"welcome to msg-board-api"
}

# A session example:
{
  "username": "ken"
}

```

****


## Testing
> Make sure [mocha](https://github.com/mochajs/mocha) available globally.  
> If not, `npm i mocha -g`

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
