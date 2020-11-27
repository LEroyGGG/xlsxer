const num2letter = require('../../utils/num2letter');

module.exports = function updateSheets(data) {
  data.sheets = data.sheets || [];

  data.sheets.forEach((sheet, idx) => {
    sheet.id = idx + 1;
    sheet.dimension = ['A1'];

    let maxX = 1;
    let maxY = sheet.content.length;

    sheet.content.forEach((row, idx) => {
      row.id = idx + 1;

      let size = 0;

      row.childs.forEach((cell, idx) => {
        cell.id = num2letter(idx + 1) + ':' + row.id;

        size += cell.colspan || 1;
      });

      if (size > maxX) maxX = size;

      row.spans = [1, size];
    });

    sheet.dimension[1] = num2letter(maxX) + maxY;
  });
};
