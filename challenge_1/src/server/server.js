const mongoose = require('mongoose');
const app = require('./app');

const port = 5005;

mongoose.connect('mongodb://localhost/cryptograph');

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

