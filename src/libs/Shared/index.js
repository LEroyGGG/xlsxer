class Shared {
  constructor() {
    this._id = null;
    this._xlId = null;

    this._values = [];
  }

  set(values) {
    if ('id' in values) this._id = values.id;
    if ('xlId' in values) this._xlId = values.xlId;

    return this;
  }

  add(str) {
    let idx = this._values.indexOf(str);

    if (idx === -1) {
      idx = this._values.length;

      this._values.push(str);
    }

    return idx;
  }

  count() {
    return this._values.length;
  }

  getId() {
    return this._id;
  }

  getXlId() {
    return this._xlId;
  }

  getValues() {
    const reg = /[<&>'"]/g;

    const replaces = {
      '<': '&lt;',
      '&': '&amp;',
      '>': '&gt;',
      "'": '&apos;',
      '"': '&quot;',
    };

    return this._values.map(value => value.replace(reg, m => replaces[m] || m));
  }
}

module.exports = Shared;
