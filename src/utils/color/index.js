const { isString } = require('../types');

const utils = require('./utils');

class Color {
  constructor(value) {
    this._value = isString(value) ? value.trim() : value;

    this.value = this.parse();
  }

  validate() {
    return utils.validate(this._value);
  }

  parse() {
    return utils.parse(this._value);
  }

  hex() {
    const list = this.value.map(v => (v < 16 ? '0' : '') + v.toString(16));

    return '#' + list.join('').toUpperCase();
  }

  rgb() {
    return `rgb(${this.value.join(',')})`;
  }
}

const color = function color(value) {
  return new Color(value);
};

module.exports = Object.assign(color, utils);
