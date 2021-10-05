const path = require('path');

const App = require('../App');
const Core = require('../Core');
const Document = require('../Document');
const Workbook = require('../Workbook');
const Shared = require('../Shared');

const Styles = require('../Styles');

const Theme = require('../Theme');
const Sheet = require('../Sheet');

const Builder = require('../Builder');

const { idGenerator } = require('../../utils/common');
const { isString, isNumber, isArray, isObject } = require('../../utils/types');
const { writeStream } = require('../../utils/fs');

const { DEFAULT_NAME } = require('./settings');

class Xlsx {
  constructor(data, styles) {
    this._nextId = idGenerator('rId');
    this._nextXlId = idGenerator('rId');
    this._nextIdx = idGenerator();

    this.initializeModules(data, styles);
    this.conjunctionSheets();

    this._result = null;
  }

  meta(values) {
    [this.app, this.core, this.document, this.workbook].forEach(item => item.set(values));

    return this;
  }

  createSheets(data) {
    if (data instanceof Sheet) data = [data];

    const isListOfSheets = data.every(item => item instanceof Sheet);

    if (isListOfSheets) return data.map((item, idx) => item.set({ id: this._nextId(), xlId: this._nextXlId(), idx: idx + 1 }));

    const isValidValue = value => isObject(value) || isString(value) || isNumber(value);
    const isRawSheet = data => data.every(row => (isObject(row) && !!row.values) || row.every(isValidValue));

    const isRawData = isRawSheet(data);

    if (isRawData) data = [data];

    const isRawList = data.every(isRawSheet);

    if (isRawList) {
      return data.map((sheet, idx) => {
        const item = new Sheet(DEFAULT_NAME(idx + 1), sheet, this.styles);

        return item.set({ id: this._nextId(), xlId: this._nextXlId(), idx: idx + 1 });
      });
    }

    throw new Error('Xlsx should contain at least one sheet');
  }

  initializeModules(data, styles) {
    this.app = new App().set({ id: this._nextId() });
    this.core = new Core().set({ id: this._nextId() });
    this.workbook = new Workbook().set({ id: this._nextId() });
    this.document = new Document().set({ id: this._nextId() });
    this.shared = new Shared().set({ id: this._nextId(), xlId: this._nextXlId() });

    this.styles = (styles || new Styles()).set({ id: this._nextId(), xlId: this._nextXlId() });

    this.sheets = this.createSheets(data);
    this.themes = [new Theme().set({ id: this._nextId(), xlId: this._nextXlId(), idx: 1 })];
  }

  conjunctionSheets() {
    for (let sheet, i = 0; sheet = this.sheets[i]; i++) {
      sheet.everyCell(cell => {
        const value = cell.getValue();

        if (!isString(value) || /^\d*(\.\d+)?$/.test(value)) return;

        const sharedId = this.shared.add(value);

        cell.set({ sharedId });
      });
    }
  }

  // collect() {
  //   return this.sheets.map(sheet => sheet.collect());
  // }
  //
  // combine() {
  //   const collected = this.collect();
  //
  //   this.repack(collected);
  //
  //   return collected;
  // }

  async build() {
    return this._result = new Builder(this).render().zip();
  }

  async save(...dest) {
    await this.styles.ready();

    this.styles.combine();

    const data = await this.build();

    dest = path.resolve(...dest);

    return writeStream(dest, data);
  }
}

module.exports = Xlsx;
