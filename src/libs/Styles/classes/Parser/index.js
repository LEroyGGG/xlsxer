const { readFile } = require('../../../../utils/fs');

const {
  MARK_FILE_START,
  MARK_FILE_END,
  TYPE_FILE_START,
  TYPE_FILE_END,
  TYPE_SELECTOR,
  TYPE_PROPERTIES,
  TYPE_BLOCK_START,
  TYPE_BLOCK_END,
} = require('./constants');

const matchers = require('./matchers');

class Parser {
  constructor(path) {
    this._src = path;

    this.result = null;
  }

  async process() {
    const data = await readFile(this._src);

    const parts = this.split(data);
    const blocks = this.match(parts);

    this.result = this.combine(blocks);

    return this.result;
  }

  split(data) {
    return data.split(/(\{|\})/).map(v => v.trim()).filter(v => v);
  }

  match(parts) {
    let last_type, last_part;

    const blocks = [MARK_FILE_START, ...parts, MARK_FILE_END].map(part => {
      const type = matchers.recognize(part, last_type);

      const block = matchers[type].call(this, part, last_type, last_part);

      last_type = type;
      last_part = part;

      return block;
    });

    return blocks.filter(v => v);
  }

  combine(blocks) {
    const items = [];

    blocks = blocks.slice();

    while (blocks.length) {
      const selector = blocks.shift().items;
      const properties = blocks[0] && blocks[0].type === TYPE_PROPERTIES ? blocks.shift().items : [];

      items.push({ selector, properties });
    }

    return items;
  }

  createError(text) {
    return new Error(`An error appear in styles:\n  at: ${this._src}\n  ${text}`);
  }
}

Parser.process = src => {
  const parser = new Parser(src);

  return parser.process();
};

module.exports = Parser;
