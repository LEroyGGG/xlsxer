const { isString } = require('../../../../utils/types');

const self = {};

self.validate = value => isString(value) && /^((?:'|")?)[a-z0-9\-\_\s]+\1$/i.test(value);

self.transform = value => {
  const font = value.replace(/^['"]|['"]$/g, '');

  return {
    'font-family': font
  };
};

self.inheritable = true;

module.exports = self;
