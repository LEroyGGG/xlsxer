const Sheet = require('../Sheet');
const Styles = require('../Styles');

const { isString, isArray } = require('../../utils/types');

class Xlsx {
  constructor(data, styles) {
    this._sheets = [];
    this._shared = [];

    if (isArray(data)) {
      const sheet = new Sheet('Sheet 1', data, styles || new Styles());

      this._sheets.push(sheet);
    } else {
      for (let i = 0, len = arguments.length; i < len; i++) {
        const sheet = arguments[i];

        if (!(sheet instanceof Sheet)) {
          throw new Error('Invalid arguments passed into Xlsx constructor');
        }

        this._sheets.push(sheet);
      }
    }

    if (!this._sheets.length) {
      throw new Error('Xlsx should contain at least one sheet');
    }
  }

  collect() {
    return this._sheets.map(sheet => sheet.collect());
  }

  combine() {
    const collected = this.collect();

    this.repack(collected);

    return collected;
  }

  repack(collected) {
    for (let i = 0, i_len = collected.length; i < i_len; i++) {
      const sheet = collected[i];

      for (let j = 0, j_len = sheet.length; j < j_len; j++) {
        const row = sheet[j];

        for (let k = 0, k_len = row.length; k < k_len; k++) {
          const cell = row[k];

          const { value } = cell;

          cell.isShared = isString(value) && !/^\d*(\.\d+)?$/.test(value);

          if (cell.isShared) {
            cell.sharedId = this._shared.length;

            this._shared.push(value);
          }
        }
      }
    }
  }

  save(...dest) {
    dest = path.resolve(...dest);
  }
}

module.exports = Xlsx;
