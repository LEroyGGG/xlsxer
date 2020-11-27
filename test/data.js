const title = 'Test document';
const creator = 'User name';
const date = new Date().toISOString();

const sheets = [];

sheets[0] = {
  title: 'First table',
  data: [
    {
      childs: [
        { value, rowspan, colspan, style },
        { value, rowspan, colspan, style },
        { value, rowspan, colspan, style },
        { value, rowspan, colspan, style },
        { value, rowspan, colspan, style },
      ]
    }
  ]
};

module.exports = {
  title,
  creator,
  date,
  sheets,
};
