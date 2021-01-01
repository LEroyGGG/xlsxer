const self = {};

self.idGenerator = prefix => {
  let last = 0;

  return () => ++last && prefix ? prefix + last : last;
};

self.pick = function pick(props, src) {
  return props.reduce((r, n) => (n in src && (r[n] = src[n]), r), {});
};

module.exports = self;
