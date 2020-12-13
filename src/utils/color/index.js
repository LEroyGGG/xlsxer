const { isString } = require('../types');

const names = require('./list');
const utils = require('./utils');

const int_16 = num => {
  num = Math.round(num);

  const prefix = num < 16 ? '0' : '';

  return (prefix + num.toString(16)).toUpperCase();
};

class Color {
  constructor(value) {
    this._initial = value;

    this.value = utils.parse(value);
    this.isValid = utils.validate(value);
  }

  hex() {
    const list = this.value.map(int_16);

    return '#' + list.join('');
  }

  hexAlpha() {
    let color = this.value.slice(0, 3);
    let alpha = this.value[3];

    color = color.map(int_16);
    alpha = int_16(alpha * 255);

    return '#' + color.join('') + alpha;
  }

  hexAlphaReversed() {
    let color = this.value.slice(0, 3);
    let alpha = this.value[3];

    color = color.map(int_16);
    alpha = int_16(alpha * 255);

    return '#' + alpha + color.join('');
  }

  rgb() {
    let color = this.value.slice(0, 3);

    return `rgb(${color.join(',')})`;
  }

  rgbAlpha() {
    return `rgba(${this.value.join(',')})`;
  }
}

Color.names = names;

module.exports = Object.assign(Color, utils);
