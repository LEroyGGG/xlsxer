const Color = require('../../../../utils/color');

const self = {};

self.validate = value => (new Color(value)).isValid;

self.transform = value => {
  const color = new Color(value);

  return {
    'color': color.hexExcel()
  };
};

self.inheritable = true;

module.exports = self;
