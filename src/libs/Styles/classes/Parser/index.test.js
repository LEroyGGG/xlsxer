const path = require('path');

const Parser = require('.');

describe("Parser", () => {
  test("process", async () => {
    const data = [
      {
        "selector": [
          "::defaults"
        ],
        "properties": [
          {
            "name": "width",
            "value": "50px"
          },
          {
            "name": "height",
            "value": "25px"
          },
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
      },
      {
        "selector": [
          "::row(1)"
        ],
        "properties": [
          {
            "name": "position",
            "value": "fixed"
          },
          {
            "name": "height",
            "value": "36px"
          }
        ]
      },
      {
        "selector": [
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
          },
          {
            "name": "background-color",
            "value": "transparent"
          }
        ]
      },
      {
        "selector": [
          "URL"
        ],
        "properties": [
          {
            "name": "display",
            "value": "link"
          }
        ]
      },
      {
        "selector": [
          "EMPTY"
        ],
        "properties": []
      }
    ];

    const src = path.resolve(__dirname, 'styles.test.css');

    const result = await Parser.process(src);

    expect(result).toEqual(data);
  });
});
