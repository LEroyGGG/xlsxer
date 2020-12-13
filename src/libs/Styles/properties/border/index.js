const Color = require('../../../../utils/color');

const self = {};

// TODO: Add other border styles
const list = ['thick'];

self.validate = value => {
  // TODO: Improove validator
  const parts = value.split(' ');

  const style = parts.pop();
  const color = parts.join(' ');

  return list.includes(style) && (new Color(color)).isValid;
};

self.transform = value => (new Color(value)).hexAlphaReversed();

module.exports = self;
