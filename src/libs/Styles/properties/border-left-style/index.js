const border = require('../border');

const self = {};

self.validate = border.validateStyle;

self.transform = value => {
  return {
    'border-left-style': border.transformStyle(value),
  };
};

self.inheritable = true;

module.exports = self;
