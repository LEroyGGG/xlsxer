const border = require('../border');

const self = {};

self.validate = border.validate;

self.transform = value => {
  const props = border.transform(value);

  return {
    'border-top-color': props['border-top-color'],
    'border-top-style': props['border-top-style'],
  };
};

self.inheritable = true;

module.exports = self;
