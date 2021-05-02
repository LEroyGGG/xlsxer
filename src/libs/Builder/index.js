const archiver = require('archiver');

const templates = require('./templates');

const { ZIP_LEVEL } = require('./settings');

class Builder {
  constructor(xlsx) {
    this._xlsx = xlsx;

    this.archive = archiver('zip', { zlib: { level: ZIP_LEVEL } });

    this.archive.on('warning', e => {
      if (e.code === 'ENOENT') {
        console.warn(e);
      } else {
        throw e;
      }
    });

    this.archive.on('error', e => {
      throw e;
    });

    this.zipped = false;
  }

  renderType(type, context, idx) {
    const list = templates[type];

    for (let path in list) {
      if (!list.hasOwnProperty(path)) continue;

      const name = list[path].name(context, idx);
      const data = list[path].file(this._xlsx, context, idx);

      const buffer = Buffer.from(data);

      this.archive.append(buffer, { name });
    }
  }

  render() {
    if (this.zipped) {
      throw new Error('Xlsxer: Trying to add files in zipped archive');
    }

    this.renderType('simple');

    this._xlsx.themes.forEach((theme, idx) => this.renderType('themes', theme, idx));
    this._xlsx.sheets.forEach((sheet, idx) => this.renderType('sheets', sheet, idx));
  }

  zip() {
    if (this.zipped) return this.archive;

    this.archive.finalize();

    this.zipped = true;

    return this.archive;
  }
}

module.exports = Builder;
