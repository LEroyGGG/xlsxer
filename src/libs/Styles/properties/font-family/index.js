const { isString } = require('../../../../utils/types');

const self = {};

self.validate = value => isString(value);

self.transform = value => {
  return {
    'font-family': value
  };
};

module.exports = self;
