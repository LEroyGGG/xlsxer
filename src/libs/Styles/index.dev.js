const Styles = require('.');

const run = async () => {
  const styles = new Styles();

  await styles.addFile(__dirname, './styles.test.css');

  const { ids, combines } = styles.combine();

  // console.log(JSON.stringify(styles.collect(), null, '  '));

  console.log(JSON.stringify({ ids, combines }, null, '  '));

  styles._rules._items.forEach(rule => {
    console.log(rule.getName() + ' :: ' + rule.getId() + ' :: ' + JSON.stringify(rule._styles));
  });
};

run();
