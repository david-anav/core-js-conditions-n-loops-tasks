// '1'        'one'
// '10'       'one zero'
// '-10'      'minus one zero'
// '10.5'     'one zero point five'
// '10,5'     'one zero point five'
// '1950.2'   'one nine five zero point two'
function convertNumberToString(numberStr) {
  const arrNumb = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const len = numberStr.length;
  let numToStr = '';
  let i = 0;
  while (i < len) {
    const letter = numberStr[i];

    if (len === 1) {
      return arrNumb[letter];
    }
    switch (letter) {
      case '.':
        numToStr += ' point';
        break;
      case ',':
        numToStr += ' point';
        break;
      case '-':
        numToStr += 'minus';
        break;
      default:
        numToStr += `${arrNumb[Number(letter)]}`;
        if (i !== len - 1) {
          numToStr += ' ';
        }
        break;
    }
    i += 1;
  }
  return numToStr;
}
console.log(convertNumberToString('10'));

