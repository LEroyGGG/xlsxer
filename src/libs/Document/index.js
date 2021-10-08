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
    if ('createDate' in values) this._createDate = values.createDate instanceof Date ? values.createDate : new Date(values.createDate);
    if ('modifyDate' in values) this._modifyDate = values.modifyDate instanceof Date ? values.modifyDate : new Date(values.modifyDate);

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

  getModifyDate() {
    return this._modifyDate;
  }
}

module.exports = Document;
