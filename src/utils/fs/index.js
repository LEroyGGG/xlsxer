const fs = require('fs');

const self = {};

self.readFile = function read(src, encoding = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(src, encoding, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

module.exports = self;
