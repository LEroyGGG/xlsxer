const { NAME_DEFAULT } = require('../../../Styles');

const n2l = require('../../../../utils/num2letter');

const { isString } = require('../../../../utils/types');

class Cell {
  constructor(index, data) {
    this._index = index;

    this._value = isString(data) ? data : data.value;
    this._style = isString(data) ? NAME_DEFAULT : data.stl;

    this._styles = null;

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

    if ('styles' in values) {
      this._styles = values.styles;
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
    return this._styles ? this._styles.getIdByName(this._style) || this._styles.getIdByName(NAME_DEFAULT) : 2;
  }
}

module.exports = Cell;
