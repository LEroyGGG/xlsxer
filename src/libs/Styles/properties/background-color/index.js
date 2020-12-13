const Color = require('../../../../utils/color');

const self = {};

self.validate = value => (new Color(value)).isValid;

self.transform = value => (new Color(value)).hexAlphaReversed();

module.exports = self;
