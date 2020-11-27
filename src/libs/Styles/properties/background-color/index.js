const color = require('../../../../utils/color');

const self = {};

self.validate = value => color(value).validate();

self.transform = value => color(value).hex();

module.exports = self;
