const _toString = Object.prototype.toString;

const self = value => _toString.call(value).slice(8, -1);

self.isString = value => self(value) === 'String';

self.isNumber = value => self(value) === 'Number' && value === value;
self.isFiniteNumber = value => self.isNumber(value) && Number.isFinite(value);
self.isNaN  = value => value !== value;

self.isArray = value => Array.isArray(value);

self.isObject = value => !!value && value.constructor === Object;

module.exports = self;
