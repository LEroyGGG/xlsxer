const Color = require('../../../../utils/color');

const NONE = 'none';
const GRAY = 'gray125';

// TODO: Add other background styles
const list = [NONE, GRAY, 'solid'];

const reg_clean_types = new RegExp('\\b(' + list.join('|') + ')\\b', 'ig');

const self = {};

self.validate = value => {
  if (value === NONE || value === GRAY) return true;

  let cleaned = value.replace(reg_clean_types, '').trim();

  const color = new Color(cleaned);

  if (!color.isValid) return false;

  cleaned = value.replace(cleaned, '').trim() || 'solid';

  return list.includes(cleaned);
};

self.transform = value => {
  let color = (new Color('#fff')).hexExcel();
  let style = value;

  if (value !== NONE && value !== GRAY) {
    const cleaned = value.replace(reg_clean_types, '').trim();

    color = (new Color(cleaned)).hexExcel();
    style = value.replace(cleaned, '').trim() || 'solid';
  }

  return {
    'background-color': color,
    'background-style': style,
  };
};

self.inheritable = true;

self.validateColor = color => (new Color(color)).isValid;
self.validateStyle = style => list.includes(style);

self.transformColor = color => (new Color(color)).hexExcel();
self.transformStyle = style => style;

module.exports = self;
