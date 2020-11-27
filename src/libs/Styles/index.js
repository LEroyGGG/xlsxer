const types = require('../../../../utils/types');
const { pick } = require('../../../../utils/common');

const properties = require('./properties');

class Styles {
  constructor() {
    this._defaults = {};
    this._list = {};

    this.items = {
      fonts: [],
    };
  }

  addGlobal(values) {
    if (!types.isObject(values)) {
      throw new Error(`Argument values should be simple object. Passed type "${types(values)}"`);
    }

    this.validate(values);

    Object.assign(this._defaults, values);
  }

  add(name, values) {
    if (!types.isObject(values)) {
      throw new Error(`Argument values should be simple object. Passed type "${types(values)}"`);
    }

    if (name in this._list) {
      throw new Error(`Duplication of "${name}" in styles list`);
    }

    this.validate(values);



    this._list[name] = values;
  }

  validate(values) {
    for (let prop in values) {
      if (!values.hasOwnProperty(name)) continue;

      if (!properties[prop]) throw new Error(`Unknown style property "${prop}"`);

      const isValid = properties[prop].validate(values[prop]);

      if (!isValid) return false;
    }

    return true;
  }

  split(values) {
    const font = pick(['font-size', 'font-family'], values);
    const _font = pick(['font-size', 'font-family'], this._defaults);

    return {
      font: { ..._font, ...font },
    };
  }
}

Styles.properties = properties;

module.exports = Styles;
