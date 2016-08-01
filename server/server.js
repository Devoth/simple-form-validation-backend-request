var express = require('express'),
    app     = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since');
  next();
 });

app
.route('/auth')
    .get(function (req, res) {
      console.log("writing headers only");
      res.send('foo');
    })
    .post(function (req, res) {
      // console.log("writing headers only");
      // res.sendStatus(200); // equivalent to res.status(200).send('OK')
      res.sendStatus(201); // equivalent to res.status(200).send('OK')
      // res.sendStatus(400); // equivalent to res.status(200).send('OK')
      // res.sendStatus(401); // equivalent to res.status(200).send('OK')
      // res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
      // res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
      // res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
    });

app
  .listen(3000);
