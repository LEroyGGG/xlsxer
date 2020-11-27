const { isString } = require('../../../../utils/types');

const self = {};

self.validate = value => isString(value);

self.transform = value => value;

module.exports = self;
