const properties = require('../../properties');

class Rule {
  constructor(name, defaults) {
    this._id = null;

    this._name = name;
    this._defaults = defaults;

    this._properties = {};
    this._styles = {};
  }

  setId(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  set(props) {
    Object.assign(this._properties, props);
  }

  get(name) {
    const _default = this._defaults ? this._defaults.get(name) : null;

    return this._properties[name] || _default;
  }

  getAll() {
    return { ...this._properties };
  }

  collect() {
    let defaults = this._defaults ? this._defaults.collect() : {};

    defaults = Object.keys(defaults).reduce((result, key) => {
      if (properties[key].inheritable) {
        result[key] = defaults[key];
      }

      return result;
    }, {});

    return { ...defaults, ...this._properties };
  }

  clone() {
    const rule = new Rule();

    rule._name = this._name;
    rule._defaults = this._defaults;

    rule._properties = this._properties;

    return rule;
  }

  setStyle(name, id) {
    this._styles[name] = id;
  }

  getStyle(name) {
    return this._styles[name];
  }

  getStyles() {
    return this._styles;
  }

  combine(stack) {
    const data = this.collect();

    return Object.keys(stack).reduce((result, key) => {
      result[stack[key]] = data[key];

      return result;
    }, {});
  }
}

module.exports = Rule;
