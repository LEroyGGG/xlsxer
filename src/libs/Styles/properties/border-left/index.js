const border = require('../border');

const self = {};

self.validate = border.validate;

self.transform = value => {
  const props = border.transform(value);

  return {
    'border-left-color': props['border-left-color'],
    'border-left-style': props['border-left-style'],
  };
};

module.exports = self;
