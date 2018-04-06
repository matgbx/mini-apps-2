const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('dev'));
app.use(parser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.post('/order/:type', (req, res) => {
  console.log('post request received', req.body);
  res.end();
});

module.exports = app;
