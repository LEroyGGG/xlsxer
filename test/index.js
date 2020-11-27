const styles = require('./styles');

const run = () => {
  new Xslx(data, styles)
    .create()
    .save([__dirname, 'file.xlsx']);
};
