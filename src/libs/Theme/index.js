class Themes {
  constructor() {
    this._id = null;
    this._idx = null;
    this._xlId = null;
  }

  set(values) {
    if ('id' in values) this._id = values.id;
    if ('idx' in values) this._idx = values.idx;
    if ('xlId' in values) this._xlId = values.xlId;

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
}

module.exports = Themes;
