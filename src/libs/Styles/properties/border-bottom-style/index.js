const border = require('../border');

const self = {};

self.validate = border.validateStyle;

self.transform = value => {
  return {
    'border-bottom-style': border.transformStyle(value),
  };
};

module.exports = self;
