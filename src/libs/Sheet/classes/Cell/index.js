const n2l = require('../../../../utils/num2letter');

const { isString } = require('../../../../utils/types');

const STYLE_DEFAULT = '::defaults';

class Cell {
  constructor(index, data) {
    this._index = index;

    this._value = isString(data) ? data : data.value;
    this._style = isString(data) ? STYLE_DEFAULT : data.stl;

    this._isShared = data.isShared || false;
    this._sharedId = data.isShared || null;
  }

  getName() {
    const [x, y] = this._index;

    return n2l(x) + y;
  }

  isShared() {
    return this._isShared;
  }

  getValue() {
    return this._isShared ? this._sharedId : this._value;
  }
}

module.exports = Cell;
