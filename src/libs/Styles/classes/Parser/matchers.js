const properties = require('../../properties');

const {
  MARK_FILE_START, MARK_FILE_END,
  TYPE_FILE_START, TYPE_FILE_END,
  TYPE_BLOCK_START, TYPE_BLOCK_END,
  TYPE_SELECTOR, TYPE_PROPERTIES,
} = require('./constants');

const self = {};

self.recognize = (item, last_type) => {
  if (item === MARK_FILE_START) return TYPE_FILE_START;
  if (item === MARK_FILE_END) return TYPE_FILE_END;

  if (item === '{') return TYPE_BLOCK_START;
  if (item === '}') return TYPE_BLOCK_END;

  if (last_type === TYPE_BLOCK_START) return TYPE_PROPERTIES;
  if (last_type === TYPE_BLOCK_END || last_type === TYPE_FILE_START) return TYPE_SELECTOR;

  return null;
};

self[TYPE_FILE_START] = function matchFileStart(part, last_type, last_part) {};

self[TYPE_FILE_END] = function matchFileEnd(part, last_type, last_part) {
  if (last_type !== TYPE_BLOCK_END) {
    throw this.createError('Invalid file end: ' + last_part);
  }
};

self[TYPE_BLOCK_START] = function matchBlockStart(part, last_type, last_part) {
  if (last_type !== TYPE_SELECTOR) {
    throw this.createError(part + last_part);
  }
};

self[TYPE_BLOCK_END] = function matchBlockEnd(part, last_type, last_part) {
  if (last_type !== TYPE_PROPERTIES && last_type !== TYPE_BLOCK_START) {
    throw this.createError(part + last_part);
  }
};

self[TYPE_SELECTOR] = function matchSelector(part, last_type, last_part) {
  if (last_type !== TYPE_FILE_START && last_type !== TYPE_BLOCK_END) {
    const first_part = part === MARK_FILE_START ? '' : part;

    throw this.createError(first_part + last_part);
  }

  const type = TYPE_SELECTOR;
  const items = part.split(',').map(v => v.trim());

  for (let i = 0, len = items.length; i < len; i++) {
    if (/^[a-z0-9_]+$|^::[a-z_]+(\(\d+\))?$/i.test(items[i])) continue;

    throw this.createError('Invalid selector name: ' + items[i]);
  }

  return { type, items };
};

self[TYPE_PROPERTIES] = function matchProperties(part, last_type, last_part) {
  if (last_type !== TYPE_BLOCK_START) {
    throw this.createError(part + last_part);
  }

  const decs = part.split(';').map(v => v.trim()).filter(v => v);

  for (let i = 0, len = decs.length; i < len; i++) {
    if (/^[a-z\-]+\s*:\s*[#a-z0-9\(\),\-\'\"\s]+\s*$/i.test(decs[i])) continue;

    throw this.createError('Invalid declaration: ' + decs[i]);
  }

  const type = TYPE_PROPERTIES;

  const items = decs.map(dec => {
    const [name, value] = dec.split(':').map(v => v.trim());

    if (!(name in properties)) {
      throw this.createError('Invalid property name: ' + dec);
    }

    if (!properties[name].validate(value)) {
      throw this.createError('Invalid property value: ' + dec);
    }

    return { name, value };
  });

  return { type, items };
};

module.exports = self;
