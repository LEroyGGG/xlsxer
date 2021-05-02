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

self.writeStream = function writeStream(dest, data) {
  return new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(dest);

    stream.on('error', reject);
    stream.on('finish', resolve);

    data.pipe(stream);
  });
};

module.exports = self;
