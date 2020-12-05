const color = require('../../../../utils/color');

const self = {};

self.validate = value => new Color(value).validate();

self.transform = value => new Color(value).hexAlpha();

module.exports = self;
