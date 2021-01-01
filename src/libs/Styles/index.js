const Parser = require('./classes/Parser');
const Rules = require('./classes/Rules');

const properties = require('./properties');

const DEFAULT_STYLES = require('./default.styles');

class Styles {
  constructor(...path) {
    this._id = null;
    this._rules = new Rules();

    this._waitings = [];

    this.addInline(DEFAULT_STYLES);

    path.length && this.addFile(...path);
  }

  set(values) {
    if ('id' in values) this._id = values.id;

    return this;
  }

  ready() {
    return Promise.all(this._waitings.slice());
  }

  async addInline(str) {
    const wait = new Promise(async resolve => {
      await this.ready();

      const items = await Parser.readInline(str).process();

      this.setRules(items);

      resolve();
    });

    this._waitings.push(wait);

    return this;
  }

  async addFile(...src) {
    const wait = new Promise(async resolve => {
      await this.ready();

      const items = await Parser.readFile(...src).process();

      this.setRules(items);

      resolve();
    });

    this._waitings.push(wait);

    return this;
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

  clone() {

  }

  getFonts() {
  }

  getBackgrounds() {
  }

  getBorders() {
  }

  getStyles() {
  }

  getAligns() {
  }
}

Styles.properties = properties;

module.exports = Styles;
