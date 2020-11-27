const package = require('../../../../package.json');

const app = {
  name: package.name,
  version: package.version,
};

module.exports = function updateApp(data) {
  data.app = { ...app, ...(data.app || {}) };
};
