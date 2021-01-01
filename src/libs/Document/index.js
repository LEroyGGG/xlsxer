class Document {
  constructor() {
    this._id = null;

    this._author = 'Unknown';
    this._modifier = null;

    this._createDate = new Date();
    this._modifyDate = null;
  }

  set(values) {
    if ('id' in values) this._id = values.id;
    if ('author' in values) this._author = values.author;
    if ('modifier' in values) this._modifier = values.modifier;
    if ('createDate' in values) this._createDate = values.createDate;
    if ('modifyDate' in values) this._modifyDate = values.modifyDate;

    return this;
  }

  getId() {
    return this._id;
  }

  getAuthor() {
    return this._author;
  }

  getModifier() {
    return this._modifier;
  }

  getCreateDate() {
    return this._createDate;
  }

  getUpdateDate() {
    return this._modifyDate;
  }
}

module.exports = Document;
