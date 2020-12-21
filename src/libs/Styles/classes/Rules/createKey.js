module.exports = object => {
  const names = Object.keys(object);

  names.sort((a, b) => {
    if (a > b) return  1;
    if (a < b) return -1;

    return 0;
  });

  return names.map(name => '[' + name + ':' + object[name] + ']').join('');
};
