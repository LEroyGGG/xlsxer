const Styles = require('../Styles');

const Row = require('./classes/Row');
const Locks = require('./classes/Locks');

const { isString, isObject } = require('../../utils/types');

class Sheet {
  constructor(name, data, styles) {
    if (!(styles instanceof Styles)) {
      throw new Error('Each Xlsx Sheet shoult take Styles as a 3rd argument');
    }

    this._id = null;
    this._idx = null;

    this._locks = new Locks();

    this._styles = styles;

    this._data = [];
    this._rows = [];

    this._name = name;

    for (let i = 0, i_len = data.length; i < i_len; i++) {
      const row = [];

      const values = isObject(data[i]) ? data[i].values : data[i];
      const settings = isObject(data[i]) ? data[i].settings : {};

      for (let j = 0, j_len = values.length; j < j_len; j++) {
        const value = values[j];

        row[j] = isObject(value) ? value : { value };
      }

      this._data[i] = row;
      this._rows[i] = new Row(i, row, settings, this._locks);
    }
  }

  set(values) {
    if ('id' in values) this._id = values.id;
    if ('idx' in values) this._idx = values.idx;

    return this;
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

  getData() {
    
  }
}

module.exports = Sheet;
