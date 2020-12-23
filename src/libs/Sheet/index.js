const Styles = require('../Styles');

const Row = require('./classes/Row');
const Locks = require('./classes/Locks');

const { isString } = require('../../utils/types');

class Sheet {
  constructor(name, data, styles) {
    if (!(styles instanceof Styles)) {
      throw new Error('Each Xlsx Sheet shoult take Styles as a 3rd argument');
    }

    this._locks = new Locks();

    this._styles = styles;

    this._data = [];
    this._rows = [];

    this._name = name;

    for (let i = 0, i_len = data.length; i < i_len; i++) {
      const row = [];

      for (let j = 0, j_len = data[i].length; j < j_len; j++) {
        const value = data[i][j];

        row[j] = isString(value) ? { value } : value;
      }

      this._data[i] = row;
      this._rows[i] = new Row(i, row, this._locks);
    }
  }

  getName() {
    return this._name;
  }

  collect() {
    return this._rows.map(row => row.collect());
  }

  combine(data) {
    this._rows = this._data.map((item, i) => new Row(i, item));
  }
}

module.exports = Sheet;
