const clone = require('clone');

const updators = [
  require('./data/updateApp'),
  require('./data/updateSheets'),
  require('./data/updateLinks'),
];

module.exports = function processData(data) {
  data = clone(data);

  updators.forEach(upd => upd(data));

  return data;
};
