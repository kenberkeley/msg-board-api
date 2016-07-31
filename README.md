# Message Board RESTful API

## Features
> More Detail in `package.json`  
  
* [Express 4.x](https://github.com/expressjs/express)
* [Express Auto Routes](https://github.com/kenberkeley/express-auto-routes)
* [Lodash](https://github.com/lodash/lodash)
* [UUID](https://github.com/broofa/node-uuid)

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
[AutoMount] get /
[INFO] Msg board RESTful API listening at localhost:9000
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
