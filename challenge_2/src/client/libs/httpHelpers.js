const $ = require('jquery');

const post = (data, type) => {
  $.ajax({
    url: `http://localhost:5005/order/${type}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    crossDomain: true,
    data: JSON.stringify(data),
  });
};

module.exports.post = post;
