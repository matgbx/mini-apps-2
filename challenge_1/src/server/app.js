const express = require('express');
const morgan = require('morgan');
const path = require('path');
const parser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());

app.use('/', express.static(path.join(__dirname, '../public')));

module.exports = app;

