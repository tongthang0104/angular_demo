const express = require(`express`);
const app = express();
const port = process.env.PORT || 8080;
const bodyParser  = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../src/client')));

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.info('Listening on port %s. Open up http://127.0.0.1:%s/ in your browser.', port, port);
});
