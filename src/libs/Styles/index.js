const Parser = require('./classes/Parser');
const Rules = require('./classes/Rules');

const properties = require('./properties');

class Styles {
  constructor() {
    this._rules = new Rules();
  }

  async addInline(str) {
    const items = await Parser.readInline(str).process();

    this.setRules(items);
  }

  async addFile(...src) {
    const items = await Parser.readFile(...src).process();

    this.setRules(items);
  }

  setRules(items) {
    items.forEach(item => this.setRule(item));
  }

  setRule(item) {
    const values = item.properties.reduce((result, item) => {
      const { name, value } = item;

      return Object.assign(result, properties[name].transform(value));
    }, {});

    item.selectors.forEach(selector => this.updateSelector(selector, values));
  }

  updateSelector(selector, values) {
    switch (selector) {
      case Rules.SELECTOR_DEFAULT:
        return this._rules._defaults.set(values);
      default:
        return this._rules.get(selector).set(values);
    }
  }

  collect() {
    return this._rules.collect();
  }

  combine() {
    const combines = this._rules.combineProperties();
    const ids = this._rules.combineStyles();

    this.STYLES = combines;
    this.IDS = ids;

    return { ids, combines };
  }
}

Styles.properties = properties;

module.exports = Styles;
