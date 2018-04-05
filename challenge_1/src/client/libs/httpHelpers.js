const $ = require('jquery');

const get = (query, callback) => {
  $.ajax({
    url: `http://localhost:5005/currency/${query.id}`,
    method: 'GET',
    success: (result) => {
      callback(result);
    },
    error: (err) => {
      console.log(err);
    },
  });
};

module.exports.get = get;
