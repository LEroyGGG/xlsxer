const Sheet = require('.');

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
  {
    "cells": [
      {
        "_index": [
          0,
          0
        ],
        "_value": "Title 1",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          0,
          1
        ],
        "_value": "Title 2",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          0,
          2
        ],
        "_value": "Title 3",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          0,
          3
        ],
        "_value": null,
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          0,
          4
        ],
        "_value": null,
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          0,
          5
        ],
        "_value": "Title 4",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          0,
          6
        ],
        "_value": "Title 5",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      }
    ],
    "spans": "1:7"
  },
  {
    "cells": [
      {
        "_index": [
          1,
          0
        ],
        "_value": "Row 1 Col 1",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          1,
          1
        ],
        "_value": "Row 1 Col 2",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          1,
          2
        ],
        "_value": null,
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          1,
          3
        ],
        "_value": null,
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          1,
          4
        ],
        "_value": null,
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          1,
          5
        ],
        "_value": "Row 1 Col 3",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          1,
          6
        ],
        "_value": "Row 1 Col 4",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          1,
          7
        ],
        "_value": "Row 1 Col 5",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      }
    ],
    "spans": "1:8"
  },
  {
    "cells": [
      {
        "_index": [
          2,
          0
        ],
        "_value": "Row 2 Col 1",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          2,
          1
        ],
        "_value": "Row 2 Col 2",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          2,
          2
        ],
        "_value": null,
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          2,
          3
        ],
        "_value": null,
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          2,
          4
        ],
        "_value": null,
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          2,
          5
        ],
        "_value": "Row 2 Col 3",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          2,
          6
        ],
        "_value": "Row 2 Col 4",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          2,
          7
        ],
        "_value": "Row 2 Col 5",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      }
    ],
    "spans": "1:8"
  },
  {
    "cells": [
      {
        "_index": [
          3,
          0
        ],
        "_value": "Row 3 Col 1",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          3,
          1
        ],
        "_value": "Row 3 Col 2",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          3,
          2
        ],
        "_value": "Row 3 Col 3",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          3,
          3
        ],
        "_value": "Row 3 Col 4",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          3,
          4
        ],
        "_value": "Row 3 Col 5",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      }
    ],
    "spans": "1:5"
  },
  {
    "cells": [
      {
        "_index": [
          4,
          0
        ],
        "_value": "Row 4 Col 1",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          4,
          1
        ],
        "_value": "Row 4 Col 2",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          4,
          2
        ],
        "_value": "Row 4 Col 3",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          4,
          3
        ],
        "_value": "Row 4 Col 4",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          4,
          4
        ],
        "_value": "Row 4 Col 5",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      }
    ],
    "spans": "1:5"
  },
  {
    "cells": [
      {
        "_index": [
          5,
          0
        ],
        "_value": "Row 5 Col 1",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          5,
          1
        ],
        "_value": "Row 5 Col 2",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          5,
          2
        ],
        "_value": "Row 5 Col 3",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          5,
          3
        ],
        "_value": "Row 5 Col 4",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      },
      {
        "_index": [
          5,
          4
        ],
        "_value": "Row 5 Col 5",
        "_styles": null,
        "_isShared": false,
        "_sharedId": null
      }
    ],
    "spans": "1:5"
  }
];

    const sheet = new Sheet('Test tab', data);

    expect(sheet.getData()).toEqual(result);
  });
});
