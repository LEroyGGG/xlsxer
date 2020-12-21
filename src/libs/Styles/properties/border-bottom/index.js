const border = require('../border');

const self = {};

self.validate = border.validate;

self.transform = value => {
  const props = border.transform(value);

  return {
    'border-bottom-color': props['border-bottom-color'],
    'border-bottom-style': props['border-bottom-style'],
  };
};

self.inheritable = true;

module.exports = self;
