const processData = require('./processors/data');
const processStyles = require('./processors/styles');

class Xlsx {
  constructor(data, styles) {
    this._data = data;
    this._styles = styles;

    this.styles = this.prepareStyles();
  }
}

module.exports = Xlsx;
