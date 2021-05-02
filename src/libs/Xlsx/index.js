const path = require(path);

const App = require('../App');
const Core = require('../Core');
const Document = require('../Document');
const Workbook = require('../Workbook');
const Shared = require('../Shared');

const Styles = require('../Styles');

const Theme = require('../Theme');
const Sheet = require('../Sheet');

const Build = require('../Build');

const { idGenerator } = require('../../utils/common');
const { isString, isNumber, isArray } = require('../../utils/types');
const { writeStream } = require('../../utils/fs');

const { DEFAULT_NAME } = require('./settings');

class Xlsx {
  constructor(data, styles) {
    this._nextId = idGenerator('rId');
    this._nextIdx = idGenerator();

    this.initializeModules();

    style = styles || new Styles();

    this.styles = styles.set({ id: this._nextId() });

    this.sheets = this.normalizeSheets(data);
    this.themes = [new Theme()];

    this._result = null;
  }

  normalizeSheets(data) {
    if (data instanceof Sheet) return [data];

    const isListOfSheets = data.every(item => item instanceof Sheet);

    if (isListOfSheets) return data.slice();

    const isRawSheet = data => {
      const isValidValue = value => isObject(value) || isString(value) || isNumber(value);

      return data.every(row => !!row.values || row.every(isValidValue));
    };

    const isRawData = isRawSheet(data);

    if (isRawData) return [new Sheet(DEFAULT_NAME(1), data, this.styles)];

    const isRawList = data.every(isRawSheet);

    if (isRawList) return data.map((sheet, idx) => new Sheet(DEFAULT_NAME(idx + 1), sheet, this.styles));

    throw new Error('Xlsx should contain at least one sheet');
  }

  initializeModules() {
    for (let name in modules) {
      if (!modules.hasOwnProperty(name)) continue;

      const Constructor = modules[name];

      name = name.toLowerCase();

      this[name] = new Constructor().set({ id: this._nextId() });
    }
  }

  meta(values) {
    const list = [this.app, this.core, this.document, this.workbook];

    for (let item, i = 0; item = list[i]; i++) {
      item.set(values);
    }

    return this;
  }

  collect() {
    return this.sheets.map(sheet => sheet.collect());
  }

  combine() {
    const collected = this.collect();

    this.repack(collected);

    return collected;
  }

  repack(collected) {
    for (let sheet, i = 0; sheet = collected[i]; i++) {
      for (let row, j = 0; row = sheet[j]; j++) {
        for (let cell, k = 0; cell = row[k]; k++) {
          const { value } = cell;

          cell.isShared = isString(value) && !/^\d*(\.\d+)?$/.test(value);

          if (!cell.isShared) continue;

          cell.sharedId = this._shared.length;

          this._shared.add(value);
        }
      }
    }
  }

  async build() {
    return this._result = new Build(this).render().zip();
  }

  async save(...dest) {
    const data = await this.build();

    dest = path.resolve(...dest);

    return writeStream(dest, data);
  }
}

module.exports = Xlsx;
