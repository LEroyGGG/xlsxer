const self = {};

const list = ['text', 'percent', 'link'];

self.validate = value => list.includes(value);

self.transform = value => value;

module.exports = self;
