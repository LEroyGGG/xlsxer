const Color = require('../../../../utils/color');

const self = {};

// TODO: Add other border styles
const list = ['none', 'thick', 'medium'];

const reg_clean_types = new RegExp('\\b(' + list.join('|') + ')\\b', 'ig');

self.validate = value => {
  let cleaned = value.replace(reg_clean_types, '').trim();

  const color = new Color(cleaned);

  if (!color.isValid) return false;

  cleaned = value.replace(cleaned, '').trim();

  return list.includes(cleaned);
};

self.transform = value => {
  let cleaned = value.replace(reg_clean_types, '').trim();

  const color = (new Color(cleaned)).hexAlphaReversed();
  const style = value.replace(cleaned, '').trim();

  return {
    'border-top-color': color,
    'border-left-color': color,
    'border-right-color': color,
    'border-bottom-color': color,
    'border-top-style': style,
    'border-left-style': style,
    'border-right-style': style,
    'border-bottom-style': style,
  };
};

self.validateColor = color => (new Color(color)).isValid;
self.validateStyle = style => list.includes(style);

self.transformColor = color => (new Color(color)).hexAlphaReversed();
self.transformStyle = style => style;

module.exports = self;
