const Styles = require('.');

const run = async () => {
  const styles = new Styles(__dirname, './styles.test.css');

  await styles.ready();

  console.log(JSON.stringify(styles.collect(), null, '  '));

  // const { ids, combines } = styles.combine();
  //
  // console.log(JSON.stringify({ ids, combines }, null, '  '));
  //
  // styles._rules._items.forEach(rule => {
  //   console.log(rule.getName() + ' :: ' + rule.getId() + ' :: ' + JSON.stringify(rule._styles));
  // });
};

run();


// const styles = new Styles(__dirname, './styles.test.css');
//
// await styles.ready();
//
// result = styles.collect();
//
// expect(result).toEqual(data);
