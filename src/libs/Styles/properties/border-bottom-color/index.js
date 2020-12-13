const border = require('../border');

const self = {};

self.validate = border.validateColor;

self.transform = value => {
  return {
    'border-bottom-color': border.transformColor(value),
  };
};

module.exports = self;
