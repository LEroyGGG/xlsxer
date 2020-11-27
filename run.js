const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const num2letter = num => {
  if (num < 1) return null;

  let a, b, result = '';

  while (num > 0) {
    a = Math.floor((num - 1) / letter.length);
    b = (num - 1) % letter.length;

    result = letter[b] + result;

    num = a;
  }

  return result;
};

for (let i = 1; i <= 800; i++) {
  console.log(i + ' => ' + num2letter(i));
}
