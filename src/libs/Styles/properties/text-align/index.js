const self = {};

const list = ['left', 'center', 'right'];

self.validate = value => list.includes(value);

self.transform = value => value;

module.exports = self;
