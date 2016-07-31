module.exports = function (req, res, next) {

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Sorry I am so lazy
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('X-Powered-By', 'NodeJS');

  // preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.send(true);
  }

  next();
};
