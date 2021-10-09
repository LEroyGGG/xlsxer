const Parser = require('.');

describe("Parser", () => {
  test("Parser.readFile", async () => {
    const data = [
      {
        "selectors": [
          "::defaults"
        ],
        "properties": [
          {
            "name": "display",
            "value": "text"
          },
          {
            "name": "font-family",
            "value": "'Calibri'"
          },
          {
            "name": "vertical-align",
            "value": "middle"
          },
          {
            "name": "text-align",
            "value": "center"
          },
          {
            "name": "font-size",
            "value": "14px"
          },
          {
            "name": "color",
            "value": "#111"
          },
          {
            "name": "border",
            "value": "none"
          },
          {
            "name": "background",
            "value": "none"
          }
        ]
      },
      {
        "selectors": [
          "::row(1)"
        ],
        "properties": [
          {
            "name": "position",
            "value": "fixed"
          }
        ]
      },
      {
        "selectors": [
          "STATE_100",
          "STATE_200",
          "STATE_300",
          "STATE_400",
          "STATE_500",
          "STATE_ERROR"
        ],
        "properties": [
          {
            "name": "border",
            "value": "#111 thick"
          }
        ]
      },
      {
        "selectors": [
          "STATE_100"
        ],
        "properties": [
          {
            "name": "background",
            "value": "#8c72b2"
          }
        ]
      },
      {
        "selectors": [
          "STATE_200"
        ],
        "properties": [
          {
            "name": "background",
            "value": "#46a0df"
          }
        ]
      },
      {
        "selectors": [
          "STATE_300"
        ],
        "properties": [
          {
            "name": "background",
            "value": "#dfab46"
          }
        ]
      },
      {
        "selectors": [
          "STATE_400",
          "STATE_ERROR"
        ],
        "properties": [
          {
            "name": "background",
            "value": "#df4654"
          }
        ]
      },
      {
        "selectors": [
          "STATE_ERROR"
        ],
        "properties": [
          {
            "name": "background",
            "value": "#ac0000"
          }
        ]
      },
      {
        "selectors": [
          "URL"
        ],
        "properties": [
          {
            "name": "display",
            "value": "link"
          },
          {
            "name": "text-align",
            "value": "left"
          },
          {
            "name": "border",
            "value": "#111 thick"
          }
        ]
      },
      {
        "selectors": [
          "EMPTY"
        ],
        "properties": []
      }
    ];

    const src = [__dirname, '../../styles.test.css'];

    const result = await Parser.readFile(...src).process();

    expect(result).toEqual(data);
  });

  test("Parser.readInline", async () => {
    const styles = `
      ::defaults {
        display: text;
        font-family: 'Calibri';
        vertical-align: middle;
        text-align: center;
        font-size: 14px;
        color: #111;
      }
    `;

    const data = [
      {
        "selectors": [
          "::defaults"
        ],
        "properties": [
          {
            "name": "display",
            "value": "text"
          },
          {
            "name": "font-family",
            "value": "'Calibri'"
          },
          {
            "name": "vertical-align",
            "value": "middle"
          },
          {
            "name": "text-align",
            "value": "center"
          },
          {
            "name": "font-size",
            "value": "14px"
          },
          {
            "name": "color",
            "value": "#111"
          }
        ]
      }
    ];

    const result = await Parser.readInline(styles).process();

    expect(result).toEqual(data);
  });
});
