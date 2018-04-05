const router = require('express').Router();
const db = require('../db/helpers');

router.get('/:id', (req, res) => {
  const query = { id: req.params.id };
  db.find(query, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
