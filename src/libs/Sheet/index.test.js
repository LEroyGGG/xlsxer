const Sheet = require('.');

const Styles = require('../Styles');

describe("Sheet", () => {
  test("Simple create", () => {
    const data = [
      ['Title 1', 'Title 2', { value: 'Title 3', rowSpan: 3, colSpan: 3 }, 'Title 4', 'Title 5'],
      {
        settings: {
          height: 36,
          group: '<groupID>',
        },
        values: ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3', 'Row 1 Col 4', 'Row 1 Col 5'],
      },
      ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3', 'Row 2 Col 4', 'Row 2 Col 5'],
      ['Row 3 Col 1', 'Row 3 Col 2', 'Row 3 Col 3', 'Row 3 Col 4', 'Row 3 Col 5'],
      ['Row 4 Col 1', 'Row 4 Col 2', 'Row 4 Col 3', 'Row 4 Col 4', 'Row 4 Col 5'],
      ['Row 5 Col 1', 'Row 5 Col 2', 'Row 5 Col 3', 'Row 5 Col 4', 'Row 5 Col 5'],
    ];

    const result = [
      [
        { "value": "Title 1" },
        { "value": "Title 2" },
        { "value": "Title 3", "rowSpan": 3, "colSpan": 3 },
        { "value": null, "lockedBy": [2, 0] },
        { "value": null, "lockedBy": [2, 0] },
        { "value": "Title 4" },
        { "value": "Title 5"
        }
      ],
      [
        { "value": "Row 1 Col 1" },
        { "value": "Row 1 Col 2" },
        { "value": null, "lockedBy": [2, 0] },
        { "value": null, "lockedBy": [2, 0] },
        { "value": null, "lockedBy": [2, 0] },
        { "value": "Row 1 Col 3" },
        { "value": "Row 1 Col 4" },
        { "value": "Row 1 Col 5"
        }
      ],
      [
        { "value": "Row 2 Col 1" },
        { "value": "Row 2 Col 2" },
        { "value": null, "lockedBy": [2, 0] },
        { "value": null, "lockedBy": [2, 0] },
        { "value": null, "lockedBy": [2, 0] },
        { "value": "Row 2 Col 3" },
        { "value": "Row 2 Col 4" },
        { "value": "Row 2 Col 5" }
      ],
      [
        { "value": "Row 3 Col 1" },
        { "value": "Row 3 Col 2" },
        { "value": "Row 3 Col 3" },
        { "value": "Row 3 Col 4" },
        { "value": "Row 3 Col 5" }
      ],
      [
        { "value": "Row 4 Col 1" },
        { "value": "Row 4 Col 2" },
        { "value": "Row 4 Col 3" },
        { "value": "Row 4 Col 4" },
        { "value": "Row 4 Col 5" }
      ],
      [
        { "value": "Row 5 Col 1" },
        { "value": "Row 5 Col 2" },
        { "value": "Row 5 Col 3" },
        { "value": "Row 5 Col 4" },
        { "value": "Row 5 Col 5" }
      ]
    ];

    const styles = new Styles();

    const sheet = new Sheet('Test tab', data, styles);

    expect(sheet.collect()).toEqual(result);
  });
});
