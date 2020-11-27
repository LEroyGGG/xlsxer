const reg_num = /^-?[0-9\.]+$/;

module.exports = function updateSheets(data) {
  data.links = [];

  data.sheets.forEach(sheet => {
    sheet.content.forEach(row => {
      row.childs.forEach(cell => {
        cell.isLink = reg_num.test(cell.value);

        if (!cell.isLink) return;

        const idx = data.links.indexOf(cell.value);
        const value = idx !== -1 ? idx : data.links.length;

        idx === -1 && data.links.push(cell.value);

        cell.value = value;
      });
    });
  });
};
