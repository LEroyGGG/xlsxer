const n2l = require('../../../../utils/num2letter');

const { isString } = require('../../../../utils/types');

const STYLE_DEFAULT = '::defaults';

class Cell {
  constructor(index, data) {
    this._index = index;

    this._value = isString(data) ? data : data.value;
    this._style = isString(data) ? STYLE_DEFAULT : data.stl;

    this._isShared = false;
    this._sharedId = null;
  }

  getName() {
    const [x, y] = this._index;

    return n2l(y + 1) + (x + 1);
  }

  set(values) {
    if ('sharedId' in values) {
      this._isShared = true;

      this._sharedId = values.sharedId;
    }

    return this;
  }

  isShared() {
    return this._isShared;
  }

  getValue() {
    return this._isShared ? this._sharedId : this._value;
  }

  getStyle() {
    return this._style;
  }
}

module.exports = Cell;
