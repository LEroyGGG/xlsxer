const Rule = require('../Rule');

const combines = require('./combines');
const createKey = require('./createKey');

class Rules {
  constructor() {
    this._items = [];
    this._styles = {};

    this._presetFisrt = new Rule(Rules.SELECTOR_EXCEL_PRESET_FIRST);
    this._presetSecond = new Rule(Rules.SELECTOR_EXCEL_PRESET_SECOND);
    this._defaults = new Rule(Rules.SELECTOR_DEFAULT);

    this._items.push(this._presetFisrt);
    this._items.push(this._presetSecond);
    this._items.push(this._defaults);
  }

  map(callback) {
    return this._items.map(callback);
  }

  get(selector) {
    let item = this._items.find(rule => rule.getName() === selector);

    !item && this._items.push(item = new Rule(selector, this._defaults));

    return item;
  }

  collect() {
    return this._items.reduce((result, rule) => {
      result[rule.getName()] = rule.collect();

      return result;
    }, {});
  }

  clone() {
    const rules = new Rules();

    rules._items = this._items.map(rule => rule.clone());

    return rules;
  }

  combineProperties() {
    for (let name in combines) {
      if (!combines.hasOwnProperty(name)) continue;

      this._styles[name] = [];

      const map = {};

      for (let i = 0, len = this._items.length; i < len; i++) {
        const item = this._items[i];
        const values = item.combine(combines[name]);

        const key = createKey(values);

        if (!(key in map)) {
          map[key] = this._styles[name].length;

          this._styles[name].push(values);
        }

        item.setStyle(name, map[key]);
      }
    }

    return this._styles;
  }

  combineStyles() {
    const ids = {}, map = {};

    let id = 0;

    for (let i = 0, len = this._items.length; i < len; i++) {
      const item = this._items[i];

      const styles = item.getStyles();
      const key = createKey(styles);

      !(key in map) && (map[key] = id++);

      ids[item.getName()] = map[key];

      item.setId(map[key]);
    }

    return ids;
  }

  getStyles() {
    const result = [];
    const jaxtapos = {};

    for (let rule, i = 0; rule = this._items[i]; i++) {
      jaxtapos[rule.getId()] = rule.getStyles();
    }

    for (let id in jaxtapos) {
      if (!jaxtapos.hasOwnProperty(id)) continue;

      result.push({ id, values: jaxtapos[id] });
    }

    return result.sort((a, b) => a.id - b.id);
  }
}

Rules.SELECTOR_DEFAULT = '::defaults';
Rules.SELECTOR_EXCEL_PRESET_FIRST = 'EXCEL_PRESET_FIRST';
Rules.SELECTOR_EXCEL_PRESET_SECOND = 'EXCEL_PRESET_SECOND';

module.exports = Rules;
