const border = require('../border');

const self = {};

self.validate = border.validateColor;

self.transform = value => {
  return {
    'border-top-color': border.transformColor(value),
  };
};

self.inheritable = true;

module.exports = self;
