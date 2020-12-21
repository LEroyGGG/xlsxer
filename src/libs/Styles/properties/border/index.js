const Color = require('../../../../utils/color');

const self = {};

const NONE = 'none';

// TODO: Add other border styles
const list = [NONE, 'thick', 'medium'];

const reg_clean_types = new RegExp('\\b(' + list.join('|') + ')\\b', 'ig');

self.validate = value => {
  if (value === NONE) return true;

  let cleaned = value.replace(reg_clean_types, '').trim();

  const color = new Color(cleaned);

  if (!color.isValid) return false;

  cleaned = value.replace(cleaned, '').trim();

  return list.includes(cleaned);
};

self.transform = value => {
  let color = null, style = null;

  if (value !== NONE) {
    const cleaned = value.replace(reg_clean_types, '').trim();

    color = (new Color(cleaned)).hexExcel();
    style = value.replace(cleaned, '').trim();
  }

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

self.inheritable = true;

self.validateColor = color => (new Color(color)).isValid;
self.validateStyle = style => list.includes(style);

self.transformColor = color => (new Color(color)).hexExcel();
self.transformStyle = style => style;

module.exports = self;
