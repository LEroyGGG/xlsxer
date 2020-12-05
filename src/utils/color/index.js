const { isString } = require('../types');

const names = require('./list');
const utils = require('./utils');

class Color {
  constructor(value) {
    this._initial = value;

    this.value = utils.parse(value);
    this.isValid = utils.validate(value);
  }

  hex() {
    const list = this.value.map(v => (v < 16 ? '0' : '') + v.toString(16));

    return '#' + list.join('').toUpperCase();
  }

  hexAlpha() {
    const list = this.value.map(v => (v < 16 ? '0' : '') + v.toString(16));

    return '#FF' + list.join('').toUpperCase();
  }

  rgb() {
    return `rgb(${this.value.join(',')})`;
  }
}

color.names = names;

module.exports = Object.assign(Color, utils);
