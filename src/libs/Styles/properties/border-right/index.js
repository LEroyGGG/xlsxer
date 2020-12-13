const border = require('../border');

const self = {};

self.validate = border.validate;

self.transform = value => {
  const props = border.transform(value);

  return {
    'border-right-color': props['border-right-color'],
    'border-right-style': props['border-right-style'],
  };
};

module.exports = self;
