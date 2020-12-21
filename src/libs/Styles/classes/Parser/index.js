const path = require('path');

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
  constructor() {
    this._data = null;

    this.result = null;
  }

  readFile(...src) {
    this._path = path.resolve(...src);

    this._data = readFile(this._path);

    return this;
  }

  readInline(str) {
    this._path = '<inline>'

    this._data = Promise.resolve(str);

    return this;
  }

  async process() {
    const data = await this._data;

    const cleared = this.clear(data);
    const parts = this.split(cleared);
    const blocks = this.match(parts);

    this.result = this.combine(blocks);

    return this.result;
  }

  clear(data) {
    return data.replace(/\/\*.*?\*\//gi, '');
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
      const selectors = blocks.shift().items;
      const properties = blocks[0] && blocks[0].type === TYPE_PROPERTIES ? blocks.shift().items : [];

      items.push({ selectors, properties });
    }

    return items;
  }

  createError(text) {
    return new Error(`An error appear in styles:\n  at: ${this._path}\n  ${text}`);
  }
}

Parser.readFile = (...src) => {
  const parser = new Parser();

  parser.readFile(...src);

  return parser;
};

Parser.readInline = str => {
  const parser = new Parser();

  parser.readInline(str);

  return parser;
};

module.exports = Parser;
