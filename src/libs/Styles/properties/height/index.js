const { isNumber, isFiniteNumber } = require('../../../../utils/types');

const self = {};

const reg = /^\s*\d+(px)?\s*$/i;

self.validate = value => {
  if (isNumber(value)) {
    return value > 0 && isFiniteNumber(value);
  }

  return reg.test(value);
};

self.transform = value => {
  const size = isNumber(value) ? value : +value.replace(/[^\d]/g, '');

  return {
    'height': size
  };
};

self.inheritable = false;

module.exports = self;
