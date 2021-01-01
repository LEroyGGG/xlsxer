class Core {
  constructor() {
    this._id = null;
  }

  set(values) {
    if ('id' in values) this._id = values.id;

    return this;
  }

  getId() {
    return this._id;
  }
}

module.exports = Core;
