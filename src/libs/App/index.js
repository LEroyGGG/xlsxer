const pkg = require('../../../package.json');

class App {
  constructor() {
    this._id = null;

    this._name = pkg.name;
    this._version = pkg.version;
  }

  set(values) {
    if ('id' in values) this._id = values.id;
    if ('application' in values) this._name = values.application;
    if ('version' in values) this._version = values.version;

    return this;
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  getVersion() {
    return this._version;
  }
}

module.exports = App;
