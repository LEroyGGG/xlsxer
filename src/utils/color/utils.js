const { isString, isArray } = require('../types');

const list = require('./list');

const self = {};

const check_hex = /^#([a-f\d]{3}|[a-f\d]{6})$/i;
const match_rgb = /^rgb\(\s*([\d]{1,3})\s*,\s*([\d]{1,3})\s*,\s*([\d]{1,3})\s*\)$/;

self.validate = function validateColor(value) {
  let valid = self.validate.named(value);

  valid = valid || self.validate.hex(value);
  valid = valid || self.validate.rgb(value);

  return valid;
};

self.validate.named = value => {
  if (!isString(value)) return false;

  return value.trim().toLowerCase() in list;
};

self.validate.hex = value => {
  if (!isString(value)) return false;

  value = value.trim();

  return check_hex.test(value);
};

self.validate.rgb = value => {
  if (!isString(value) && !isArray(value)) return false;

  if (isString(value)) {
    value = value.trim();

    const m = match_rgb.exec(value);

    if (!m) return false;

    value = [+m[1], +m[2], +m[3]];
  }

  const [r, g, b] = value;

  return r <= 255 && g <= 255 && b <= 255;
};

self.parse = function parseColor(value) {
  let val = self.parse.named(value);

  val = val || self.parse.hex(value);
  val = val || self.parse.rgb(value);

  return val;
};

self.parse.named = value => {
  if (!isString(value)) return null;

  value = value.trim().toLowerCase();

  return list[value] || null;
};

self.parse.hex = value => {
  if (!self.validate.hex(value)) return null;

  value = value.trim().slice(1).toLowerCase();

  if (value.length === 3) {
    value = value.split('').map(v => v + v).join('')
  }

  return [
  	parseInt(value.substr(0, 2), 16),
  	parseInt(value.substr(2, 2), 16),
  	parseInt(value.substr(4, 2), 16),
  ];
};

self.parse.rgb = value => {
  if (!self.validate.rgb(value)) return null;

  if (isString(value)) {
    value = value.trim();

    const m = match_rgb.exec(value);

    if (!m) return false;

    value = [+m[1], +m[2], +m[3]];
  }

  return value;
};

module.exports = self;
