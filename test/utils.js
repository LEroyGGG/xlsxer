const fs = require('fs');
const path = require('path');
const extractor = require('extract-zip');
const beautifier = require('xml-beautifier');

function getFiles(dir, files_ = []) {
  const files = fs.readdirSync(dir);

  for (let i in files) {
    const name = path.resolve(dir, files[i]);

    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }

  return files_;
}

const extract = (src, dir) => extractor(src, { dir });

exports.unwrapXlsx = async src => {
  const dest = src.replace(/\.[^\.]+$/, '');

  await extract(src, dest);

  const files = getFiles(dest);

  for (let file, i = 0; file = files[i]; i++) {
    let data = fs.readFileSync(file, 'utf8');

    data = beautifier(data);

    fs.writeFileSync(file, data);
  }
};
