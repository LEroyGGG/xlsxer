class Shared {
  constructor() {
    this._id = null;
    this._values = [];
  }

  set(values) {
    if ('id' in values) this._id = values.id;

    return this;
  }

  add(str) {
    let idx = this._values.indexOf(idx);

    if (idx === -1) {
      idx = this._values.length;

      this._values.push(str);
    }

    return idx;
  }

  count() {
    return this._values.length;
  }

  getValues() {
    return this._values.slice();
  }
}

module.exports = Shared;
