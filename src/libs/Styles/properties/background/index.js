const Color = require('../../../../utils/color');

const NONE = 'none';

const COLOR_DEFAULT = '#000';

// TODO: Add other background styles
const list = [
  NONE,
  'solid', 'darkGray', 'mediumGray', 'lightGray', 'gray125', 'gray0625',
  'darkUp', 'darkDown', 'darkHorizontal', 'darkVertical', 'darkGrid', 'darkTrellis',
  'lightHorizontal', 'lightVertical', 'lightDown', 'lightUp', 'lightGrid', 'lightTrellis'];

const reg_clean_types = new RegExp('\\b(' + list.join('|') + ')\\b', 'ig');

const self = {};

self.validate = value => {
  if (value === NONE) return true;

  let cleaned = value.replace(reg_clean_types, '').trim();

  const color = new Color(cleaned || COLOR_DEFAULT);

  if (!color.isValid) return false;

  cleaned = value.replace(cleaned, '').trim() || 'solid';

  return list.includes(cleaned);
};

self.transform = value => {
  let color = (new Color(COLOR_DEFAULT)).hexExcel();
  let style = value;

  if (value !== NONE) {
    const cleaned = value.replace(reg_clean_types, '').trim();

    color = (new Color(cleaned || COLOR_DEFAULT)).hexExcel();
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
