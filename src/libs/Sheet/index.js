const Styles = require('../Styles');

const Row = require('./classes/Row');
const Locks = require('./classes/Locks');

const n2l = require('../../utils/num2letter');
const { isString, isObject } = require('../../utils/types');

const WIDTH_COMPENSATOR = 0.78;
const HEIGHT_COMPENSATOR = 0;

class Sheet {
  constructor(name, data) {
    this._id = null;
    this._idx = null;
    this._xlId = null;

    this._cellSize = [20, 18];
    this._columnSize = [];

    this._locks = new Locks();

    this._styles = null;

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
      this._rows[i] = new Row(i, row, settings, this._locks, this._styles);
    }
  }

  set(values) {
    if ('id' in values) this._id = values.id;
    if ('idx' in values) this._idx = values.idx;
    if ('xlId' in values) this._xlId = values.xlId;

    if ('cellSize' in values) this._cellSize = values.cellSize;
    if ('columnSize' in values) this._columnSize = values.columnSize;

    if ('styles' in values) {
      this._styles = values.styles;

      this._rows.forEach(cell => cell.set({ styles: this._styles }));
    }

    return this;
  }

  getId() {
    return this._id;
  }

  getIdx() {
    return this._idx;
  }

  getXlId() {
    return this._xlId;
  }

  getName() {
    return this._name;
  }

  getCellSize() {
    let [width, height] = this._cellSize;

    width = (width + WIDTH_COMPENSATOR).toFixed(2);
    height = (height + HEIGHT_COMPENSATOR).toFixed(2);

    return [width, height];
  }

  getColumnSize() {
    const sizes = this._columnSize;

    const groups = [];

    for (let size, i = 0; size = sizes[i];) {
      let from = i + 1;
      let to = sizes.findIndex((v, j) => i <= j && v !== size);

      if (to === -1) to = sizes.length;

      const width = (size + WIDTH_COMPENSATOR).toFixed(2);

      groups.push({ from, to, width });

      i = to;
    }

    return groups;
  }

  getStyles() {
    return this._styles;
  }

  getDimension() {
    const rows = this._rows.length;
    const cols = Math.max(...this._rows.map(row => row.getSize()));

    return 'A1:' + n2l(cols) + rows;
  }

  everyRow(callback) {
    for (let row, i = 0; row = this._rows[i]; i++) {
      callback(row, i);
    }
  }

  everyCell(callback) {
    this.everyRow((row, i) => {
      for (let cell, j = 0; cell = row._cells[j]; j++) {
        callback(cell, j, row, i);
      }
    });
  }

  getData() {
    return this._rows.map(row => row.getData());
  }

  getMergedCells() {
    return this._locks.getMergedCells();
  }
}

module.exports = Sheet;
