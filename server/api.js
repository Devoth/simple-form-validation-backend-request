var express    = require('express'),
    bodyParser = require('body-parser'),
    router     = express.Router();

router
  .route('/auth')
    .get(function (req, res) {
      console.log("writing headers only");
      // res.header("Access-Control-Allow-Origin", "*");
    })
    .post(function (req, res) {

      console.log("writing headers only");
      res.header("Access-Control-Allow-Origin", "*");
      res.sendStatus(200); // equivalent to res.status(200).send('OK')
      // res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
      // res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
      // res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
    });

module.exports = router;
