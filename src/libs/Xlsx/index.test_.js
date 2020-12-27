const Xlsx = require('.');

describe("Xlsx", () => {
  test("Short creation", () => {
    const data = [
      ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5'],
      ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3', 'Row 1 Col 4', 'Row 1 Col 5'],
      ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3', 'Row 2 Col 4', 'Row 2 Col 5'],
      ['Row 3 Col 1', 'Row 3 Col 2', 'Row 3 Col 3', 'Row 3 Col 4', 'Row 3 Col 5'],
      ['Row 4 Col 1', 'Row 4 Col 2', 'Row 4 Col 3', 'Row 4 Col 4', 'Row 4 Col 5'],
      ['Row 5 Col 1', 'Row 5 Col 2', 'Row 5 Col 3', 'Row 5 Col 4', 'Row 5 Col 5'],
    ];

    new Xlsx(data).save(__dirname, 'short.debug.xlsx');
  });

  test("Short creation with styles", () => {
    const styles = new Xlsx.Styles(__dirname, 'file.css');

    const data = [
      [
        { stl: 'TITLE', value: 'Title 1' },
        { stl: 'TITLE', value: 'Title 2' },
        { stl: 'TITLE', value: 'Title 3' },
        { stl: 'TITLE', value: 'Title 4' },
        { stl: 'TITLE', value: 'Title 5' }
      ],
      [
        { stl: 'VALUE', value: 'Row 1 Col 1' },
        { stl: 'VALUE', value: 'Row 1 Col 2' },
        { stl: 'VALUE', value: 'Row 1 Col 3' },
        { stl: 'VALUE', value: 'Row 1 Col 4' },
        { stl: 'VALUE', value: 'Row 1 Col 5' }
      ],
      [
        { stl: 'VALUE', value: 'Row 2 Col 1' },
        { stl: 'VALUE', value: 'Row 2 Col 2' },
        { stl: 'VALUE', value: 'Row 2 Col 3' },
        { stl: 'VALUE', value: 'Row 2 Col 4' },
        { stl: 'VALUE', value: 'Row 2 Col 5' }
      ]
    ];

    new Xlsx(data, styles).save(__dirname, 'short-and-styles.debug.xlsx');
  });

  test("Full step creation with styles", () => {
    const data_1 = [
      [
        { stl: 'TITLE', value: 'Sheet 1 Title 1' },
        { stl: 'TITLE', value: 'Sheet 1 Title 2' },
        { stl: 'TITLE', value: 'Sheet 1 Title 3' },
        { stl: 'TITLE', value: 'Sheet 1 Title 4' },
        { stl: 'TITLE', value: 'Sheet 1 Title 5' }
      ],
      [
        { stl: 'VALUE', value: 'Sheet 1 Row 1 Col 1' },
        { stl: 'VALUE', value: 'Sheet 1 Row 1 Col 2' },
        { stl: 'VALUE', value: 'Sheet 1 Row 1 Col 3' },
        { stl: 'VALUE', value: 'Sheet 1 Row 1 Col 4' },
        { stl: 'VALUE', value: 'Sheet 1 Row 1 Col 5' }
      ],
      [
        { stl: 'VALUE', value: 'Sheet 1 Row 2 Col 1' },
        { stl: 'VALUE', value: 'Sheet 1 Row 2 Col 2' },
        { stl: 'VALUE', value: 'Sheet 1 Row 2 Col 3' },
        { stl: 'VALUE', value: 'Sheet 1 Row 2 Col 4' },
        { stl: 'VALUE', value: 'Sheet 1 Row 2 Col 5' }
      ]
    ];
    const data_2 = [
      [
        { stl: 'TITLE', value: 'Sheet 1 Title 1' },
        { stl: 'TITLE', value: 'Sheet 1 Title 2' },
        { stl: 'TITLE', value: 'Sheet 1 Title 3' },
        { stl: 'TITLE', value: 'Sheet 1 Title 4' },
        { stl: 'TITLE', value: 'Sheet 1 Title 5' }
      ],
      [
        { stl: 'VALUE', value: 'Sheet 1 Row 1 Col 1' },
        { stl: 'VALUE', value: 'Sheet 1 Row 1 Col 2' },
        { stl: 'VALUE', value: 'Sheet 1 Row 1 Col 3' },
        { stl: 'VALUE', value: 'Sheet 1 Row 1 Col 4' },
        { stl: 'VALUE', value: 'Sheet 1 Row 1 Col 5' }
      ],
      [
        { stl: 'VALUE', value: 'Sheet 1 Row 2 Col 1' },
        { stl: 'VALUE', value: 'Sheet 1 Row 2 Col 2' },
        { stl: 'VALUE', value: 'Sheet 1 Row 2 Col 3' },
        { stl: 'VALUE', value: 'Sheet 1 Row 2 Col 4' },
        { stl: 'VALUE', value: 'Sheet 1 Row 2 Col 5' }
      ]
    ];

    const styles = new Xlsx.Styles(__dirname, 'file.css');

    const styles_1 = styles.clone().readInline('::cols { width: 10, 60, 15, 20, 10, 15, 5 }');
    const styles_2 = styles.clone().readInline('::cols { width: 60, 25, 10, 10, 15 }');

    const sheet_1 = new Xlsx.Sheet('First sheet', data_1, styles_1);
    const sheet_2 = new Xlsx.Sheet('Second sheet', data_2, styles_2);

    new Xlsx(sheet_1, sheet_2).meta({ author: 'Me', date: '2020-10-06' }).save(__dirname, 'full.debug.xlsx');
  });
});
