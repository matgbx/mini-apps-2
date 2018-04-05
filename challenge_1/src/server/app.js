const express = require('express');
const morgan = require('morgan');
const path = require('path');
const parser = require('body-parser');
// const routes = require('./routes');
const db = require('../db/helpers');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/bundle.js', express.static(path.join(__dirname, '../public')));

// app.use('/currency', routes);
app.get('/currency/:id', (req, res) => {
  const query = { id: req.params.id };
  db.find(query, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  });
});

module.exports = app;

