class Themes {
  constructor() {
    this._id = null;
  }

  set(values) {
    if ('id' in values) this._id = values.id;

    return this;
  }
}

module.exports = Themes;
