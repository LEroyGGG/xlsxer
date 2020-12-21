const n2l = require('.');

test("num2letter", async () => {
  expect(n2l(1)).toEqual('A');
  expect(n2l(26)).toEqual('Z');
  expect(n2l(27)).toEqual('AA');
  expect(n2l(53)).toEqual('BA');
});
